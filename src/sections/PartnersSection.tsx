import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { partners } from "../content/site-content";
import { useI18n } from "../i18n";

export function PartnersSection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const previousPartner = () => {
    setActiveIndex((index) => (index === 0 ? partners.length - 1 : index - 1));
  };

  const nextPartner = () => {
    setActiveIndex((index) => (index === partners.length - 1 ? 0 : index + 1));
  };

  return (
    <section id="partners" className="section-shell">
      <div className="section-inner">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title="Built with an ecosystem mindset."
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previousPartner}
              className="grid h-12 w-12 place-items-center rounded-full bg-mist text-obsidian transition hover:bg-white"
              aria-label={t("Show previous partner")}
            >
              <ChevronLeft aria-hidden="true" size={18} />
            </button>
            <button
              type="button"
              onClick={nextPartner}
              className="grid h-12 w-12 place-items-center rounded-full bg-mist text-obsidian transition hover:bg-white"
              aria-label={t("Show next partner")}
            >
              <ChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[0, 1, 2].map((offset) => {
            const index = (activeIndex + offset) % partners.length;
            const partner = partners[index];
            return (
              <article key={`${partner.name}-${index}`} className="soft-border min-h-[240px] p-6">
                <p className="min-h-[104px] text-[22px] font-normal leading-[1.18] text-mist">
                  {t(partner.body)}
                </p>
                <div className="mt-7 border-t border-white/12 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-[17px] font-normal text-mist">{t(partner.name)}</h3>
                      <p className="mt-2 text-[15px] leading-[1.25] text-white/44">{t(partner.title)}</p>
                    </div>
                    <span className="text-[14px] text-white/45">{index + 1}/4</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
