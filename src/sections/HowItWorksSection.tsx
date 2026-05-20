import { SectionHeader } from "../components/SectionHeader";
import { steps } from "../content/site-content";
import { useI18n } from "../i18n";

export function HowItWorksSection() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          title="From access rule to door unlock in three steps."
        />

        <div className="mt-12 grid gap-20 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div className="relative aspect-[1.29] overflow-hidden">
            <img src="/assets/framer-panel-02.jpg" alt="" className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-0">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.step} className="relative border-l border-white/32 py-7 pl-14 first:pt-0 last:pb-0">
                  <div className="absolute -left-[17px] top-7 grid h-8 w-8 place-items-center rounded-full bg-[#0d0d0c] text-mist first:top-0">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[22px] font-normal text-mist">
                    {step.step} - {t(step.title)}
                  </h3>
                  <p className="mt-3 max-w-[320px] text-[16px] leading-[1.35] text-white/48">
                    {t(step.body)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
