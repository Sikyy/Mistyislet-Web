import { ButtonLink } from "../components/ButtonLink";
import { finalCta } from "../content/site-content";
import { useI18n } from "../i18n";

export function FinalCTASection() {
  const { t } = useI18n();

  return (
    <section className="section-shell">
      <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1880px] md:w-[calc(100%_-_96px)] lg:w-[calc(100%_-_120px)]">
        <div className="relative min-h-[392px] overflow-hidden p-8 md:aspect-[2.75] md:min-h-0 md:p-12">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,13,12,0.1), rgba(13,13,12,0.74)), url('/assets/framer-final.png') center center / cover no-repeat",
            }}
          />
          <div className="relative z-10 flex min-h-[296px] max-w-[470px] flex-col items-start justify-center text-left">
            <h2 className="text-balance text-[38px] font-normal leading-[1.06] text-mist md:text-[52px]">
              {t(finalCta.heading)}
            </h2>
            <p className="mt-5 max-w-[350px] text-[17px] leading-[1.35] text-mist/72">{t(finalCta.body)}</p>
            <div className="mt-8">
              <ButtonLink href="/pricing">{t(finalCta.cta)}</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
