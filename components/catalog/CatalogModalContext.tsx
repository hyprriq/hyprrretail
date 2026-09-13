"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import RequestCatalogForm from "./RequestCatalogForm";
import { CloseIcon } from "../icons";

interface CatalogModalContextValue {
  openModal: () => void;
  closeModal: () => void;
}

const CatalogModalContext = createContext<CatalogModalContextValue | null>(
  null
);

export function useCatalogModal(): CatalogModalContextValue {
  const ctx = useContext(CatalogModalContext);
  if (!ctx) {
    throw new Error("useCatalogModal must be used within CatalogModalProvider");
  }
  return ctx;
}

export default function CatalogModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<Element | null>(null);

  const openModal = useCallback(() => {
    lastFocused.current = document.activeElement;
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    if (lastFocused.current instanceof HTMLElement) {
      lastFocused.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    dialog
      ?.querySelector<HTMLElement>(
        "input, select, textarea, button, [tabindex]"
      )
      ?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeModal]);

  return (
    <CatalogModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-modal-title"
            className="relative my-4 w-full max-w-xl rounded-card bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded p-1 text-muted transition-colors hover:text-ink"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <h2
              id="catalog-modal-title"
              className="text-xl font-bold tracking-tight text-ink"
            >
              Request Our Catalog
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Get access to our latest product catalog, brand list and current
              availability. Tell us a little about your business and we&apos;ll
              send it to you.
            </p>
            <div className="mt-6">
              <RequestCatalogForm onSuccessClose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </CatalogModalContext.Provider>
  );
}
