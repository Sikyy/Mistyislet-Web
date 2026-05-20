import { SectionHeader } from "../components/SectionHeader";
import { benefits } from "../content/site-content";
import { useI18n } from "../i18n";

export function BenefitsSection() {
  const { t } = useI18n();

  return (
    <section id="benefits" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          title="A calmer control plane for physical access."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="soft-border min-h-[192px] p-8">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-white/12 text-mist">
                  <Icon aria-hidden="true" size={26} strokeWidth={1.35} />
                </div>
                <h3 className="mt-8 text-[19px] font-normal text-mist">{t(benefit.title)}</h3>
                <p className="mt-3 text-[16px] leading-[1.35] text-white/48">{t(benefit.body)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
