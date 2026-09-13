import Breadcrumbs from "./Breadcrumbs";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export default function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: title }]} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-body">{intro}</p>
          <p className="mt-3 text-xs text-muted">
            This document is a working template. Final legal wording, entity
            details and contact information will be confirmed before formal
            publication.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="text-lg font-bold tracking-tight text-ink">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 text-sm leading-relaxed text-body"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-body">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
