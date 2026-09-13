import { ChevronDownIcon } from "./icons";

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Server-rendered accordion built on <details>/<summary> so every answer is
 * crawlable without JavaScript.
 */
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-body">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
