import { ButtonLink } from "../components/ButtonLink";
import { hero } from "../content/site-content";
import { useI18n } from "../i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="hero-visual" aria-hidden="true" />

      <div className="section-inner relative z-10 flex min-h-[100svh] items-center justify-center pb-16 pt-24 text-center">
        <div className="mx-auto max-w-[535px]">
          <h1 className="text-[48px] font-normal leading-[1.02] text-mist md:text-[60px] lg:text-[64px]">
            {t(hero.heading)}
          </h1>
          <p className="mx-auto mt-5 max-w-[345px] text-[17px] leading-[1.35] text-mist/82">
            {t(hero.body)}
          </p>

          <div className="mt-9 flex justify-center">
            <ButtonLink href="/pricing">{t(hero.cta)}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
