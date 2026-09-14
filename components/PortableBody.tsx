import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-body">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-bold tracking-[-0.02em] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-7 text-lg font-bold text-ink">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-5 border-l-[3px] border-amber pl-5 text-base italic leading-relaxed text-body">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-body">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-body">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link href={href} className="font-medium underline underline-offset-4">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const img = value as { url?: string; alt?: string };
      if (!img?.url) return null;
      return (
        <figure className="mt-7 overflow-hidden rounded-card">
          <Image
            src={img.url}
            alt={img.alt ?? ""}
            width={1200}
            height={675}
            className="h-auto w-full"
          />
        </figure>
      );
    },
  },
};

export default function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
