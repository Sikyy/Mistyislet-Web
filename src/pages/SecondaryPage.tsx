import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import type { SecondaryPage as SecondaryPageContent } from "../content/subpage-content";
import { useI18n } from "../i18n";

type SecondaryPageProps = {
  page: SecondaryPageContent;
};

export function SecondaryPage({ page }: SecondaryPageProps) {
  const { t } = useI18n();

  return (
    <>
      <section className="relative min-h-[72svh] overflow-hidden pt-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `linear-gradient(180deg, rgba(13,13,12,0.28), rgba(13,13,12,0.9)), url('${page.image}') center center / cover no-repeat`,
          }}
        />
        <div className="section-inner relative z-10 grid min-h-[calc(72svh-112px)] items-end pb-16">
          <div className="max-w-[720px]">
            <p className="text-[15px] text-mist/58">{t(page.category)}</p>
            <h1 className="mt-5 text-balance text-[48px] font-normal leading-[1.02] text-mist md:text-[68px]">
              {t(page.title)}
            </h1>
            <p className="mt-6 max-w-[560px] text-[18px] leading-7 text-mist/72">{t(page.intro)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/14 bg-white/[0.045] px-4 py-2 text-[14px] text-mist/76"
                >
                  {t(highlight)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <div className="grid gap-3 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="soft-border min-h-[330px] p-7">
                <h2 className="text-[28px] font-normal leading-tight text-mist">{t(section.title)}</h2>
                <p className="mt-5 max-w-[470px] text-[16px] leading-7 text-white/50">{t(section.body)}</p>
                <ul className="mt-8 grid gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-white/58">
                      <span className="h-1.5 w-1.5 rounded-full bg-mist/55" aria-hidden="true" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <h2 className="text-[30px] font-normal leading-tight text-mist">{t("Related paths")}</h2>
              <p className="mt-4 max-w-[360px] text-[16px] leading-7 text-white/46">
                {t("Continue through the product, solution, resource, or partner path without going back to the main page.")}
              </p>
            </div>

            <div className="grid gap-2">
              {page.related.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-14 items-center justify-between border border-white/12 px-5 text-[15px] text-mist transition hover:border-white/28 hover:bg-white/[0.035]"
                >
                  {t(item.label)}
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    className="text-white/38 transition group-hover:translate-x-1 group-hover:text-mist"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <ButtonLink href="/pricing">{t("Preview")}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
