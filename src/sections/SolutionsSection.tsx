import { useState } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { primaryCta, solutionTabs } from "../content/site-content";
import { useI18n } from "../i18n";

export function SolutionsSection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutionTabs[activeIndex];

  return (
    <section id="solutions" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          title="Cloud SaaS and mobile access, connected in one control plane."
        />

        <div className="mt-12">
          <div className="hidden md:block">
            <div
              className="mb-3 flex border-b border-white/14"
              role="tablist"
              aria-label={t("Solutions")}
            >
              {solutionTabs.map((tab, index) => {
                const selected = activeIndex === index;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`solution-panel-${index}`}
                    id={`solution-tab-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={`min-h-12 border-b px-4 text-left text-[16px] transition ${
                      selected
                        ? "border-mist text-mist"
                        : "border-transparent text-white/42 hover:text-mist"
                    }`}
                  >
                    {t(tab.title)}
                  </button>
                );
              })}
            </div>

            <div className="grid min-h-[400px] gap-20 md:grid-cols-[1fr_0.88fr] md:items-center">
              <div className="relative aspect-[1.29] overflow-hidden">
                <img
                  src="/assets/framer-panel-01.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <article
                id={`solution-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`solution-tab-${activeIndex}`}
              >
                <p className="text-[15px] text-white/42">{t(active.title)}</p>
                <h3 className="mt-5 max-w-[430px] text-[27px] font-normal leading-[1.14] text-mist">
                  {t(active.body)}
                </h3>
                <div className="mt-8">
                  <ButtonLink href="/pricing">{t(primaryCta)}</ButtonLink>
                </div>
              </article>
            </div>
          </div>

          <div className="grid gap-4 md:hidden">
            {solutionTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <article key={tab.title} className="soft-border p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/72">
                      <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-normal text-mist">{t(tab.title)}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/52">{t(tab.body)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
