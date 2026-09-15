"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface EvidenceDoc {
  src: string;
  alt: string;
  label: string;
  sub: string;
  width: number;
  height: number;
}

/**
 * Grid of redacted transaction documents with a click-to-zoom lightbox —
 * the thumbnails are too small to read the unredacted commercial detail.
 */
export default function DocumentGallery({ docs }: { docs: EvidenceDoc[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Second zoom stage: full-resolution with scroll/pan, toggled by clicking
  // the document itself. Reset whenever the open document changes.
  const [fullSize, setFullSize] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    setFullSize(false);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % docs.length));
        setFullSize(false);
      }
      if (event.key === "ArrowLeft") {
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + docs.length) % docs.length
        );
        setFullSize(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, docs.length]);

  const active = openIndex === null ? null : docs[openIndex];

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {docs.map((doc, index) => (
          <figure
            key={doc.src}
            className="overflow-hidden rounded border border-line bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Enlarge: ${doc.label}`}
              className="group relative block w-full cursor-zoom-in"
              style={{ aspectRatio: `${doc.width} / ${doc.height}` }}
            >
              <Image
                src={doc.src}
                alt={doc.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded bg-dark/75 px-2 py-1 text-[0.62rem] font-semibold text-white opacity-90 transition-opacity group-hover:opacity-100">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-3 w-3"
                  aria-hidden
                >
                  <circle cx="8.5" cy="8.5" r="5.5" />
                  <path d="m13 13 4 4M8.5 6.5v4M6.5 8.5h4" strokeLinecap="round" />
                </svg>
                Zoom
              </span>
            </button>
            <figcaption className="border-t border-line px-3 py-2.5">
              <p className="text-xs font-bold text-ink">{doc.label}</p>
              <p className="mt-0.5 text-[0.68rem] text-muted">{doc.sub}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-[70] flex flex-col p-4 sm:p-8"
          style={{ backgroundColor: "rgba(16, 17, 24, 0.96)" }}
          onClick={close}
        >
          <div className="flex items-center justify-between gap-4">
            <div onClick={(event) => event.stopPropagation()}>
              <p className="text-sm font-bold text-white">{active.label}</p>
              <p className="text-xs text-white/70">{active.sub}</p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close enlarged document"
              className="rounded-md border border-white/30 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Close ✕
            </button>
          </div>
          <div
            className={
              fullSize
                ? "mt-4 min-h-0 flex-1 overflow-auto"
                : "mt-4 flex min-h-0 flex-1 items-center justify-center"
            }
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="100vw"
              quality={90}
              onClick={() => setFullSize((z) => !z)}
              className={
                fullSize
                  ? "mx-auto h-auto w-auto max-w-none cursor-zoom-out rounded bg-white"
                  : "max-h-full w-auto max-w-full cursor-zoom-in rounded bg-white object-contain"
              }
            />
          </div>
          <p className="mt-3 text-center text-xs text-white/60">
            {(openIndex ?? 0) + 1} of {docs.length} — click the document to{" "}
            {fullSize ? "fit the screen" : "view full size"} · ← → keys · Esc
            to close
          </p>
        </div>
      )}
    </>
  );
}
