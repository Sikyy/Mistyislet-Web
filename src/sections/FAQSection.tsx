import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { faqItems } from "../content/site-content";
import { useI18n } from "../i18n";

export function FAQSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            title="Questions before deployment"
          />

          <div className="grid gap-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <article key={item.question} className="border border-white/12">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-medium text-mist"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{t(item.question)}</span>
                    <ChevronDown
                      aria-hidden="true"
                      size={18}
                      className={`shrink-0 text-smoke transition duration-300 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out ${
                      isOpen ? "max-h-[260px] translate-y-0 opacity-100" : "max-h-0 -translate-y-1 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-[15px] leading-7 text-white/48">{t(item.answer)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
