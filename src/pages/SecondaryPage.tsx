import { ButtonLink } from "../components/ButtonLink";
import type { SecondaryPage as SecondaryPageContent } from "../content/subpage-content";
import { useI18n } from "../i18n";

type SecondaryPageProps = {
  page: SecondaryPageContent;
};

export function SecondaryPage({ page }: SecondaryPageProps) {
  const { t } = useI18n();
  const hasDeepContent =
    Boolean(page.valueProps?.length) ||
    Boolean(page.featureBlocks?.length) ||
    Boolean(page.productHero) ||
    Boolean(page.productBlueprint) ||
    Boolean(page.deviceShowcase) ||
    Boolean(page.metrics?.length) ||
    Boolean(page.specGroups?.length) ||
    Boolean(page.faqs?.length);

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
          {page.valueProps?.length ? (
            <div className="grid gap-3 md:grid-cols-3">
              {page.valueProps.map((valueProp) => (
                <article key={valueProp.title} className="soft-border grid min-h-[390px] content-between gap-8 p-6">
                  <div>
                    <h2 className="text-[22px] font-normal leading-tight text-mist">{t(valueProp.title)}</h2>
                    <p className="mt-5 text-[15px] leading-7 text-white/48">{t(valueProp.body)}</p>
                  </div>
                  {valueProp.visual ? <ScenarioVisual type={valueProp.visual} /> : null}
                </article>
              ))}
            </div>
          ) : null}

          {page.featureBlocks?.length ? (
            <div className={`${page.valueProps?.length ? "mt-20" : ""} grid gap-8`}>
              {page.featureBlocks.map((block, index) => (
                <article
                  key={block.title}
                  className={`feature-block soft-border overflow-hidden ${index % 2 === 1 ? "feature-block-reversed" : ""}`}
                >
                  <div className="feature-block-image">
                    <img src={block.image} alt="" loading="lazy" />
                  </div>
                  <div className="feature-block-content">
                    <p className="text-[14px] text-white/40">{t(block.eyebrow)}</p>
                    <h2 className="mt-4 text-[32px] font-normal leading-[1.08] text-mist md:text-[40px]">
                      {t(block.title)}
                    </h2>
                    <p className="mt-5 max-w-[420px] text-[16px] leading-7 text-white/50">{t(block.body)}</p>
                    <ul className="mt-8 grid gap-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[15px] text-white/58">
                          <span className="h-1.5 w-1.5 rounded-full bg-mist/55" aria-hidden="true" />
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {page.productHero ? (
            <section className={`${page.valueProps?.length || page.featureBlocks?.length ? "mt-20" : ""} product-hero-section`}>
              <h2 className="mx-auto max-w-[640px] text-center text-[36px] font-normal leading-[1.08] text-mist md:text-[52px]">
                {t(page.productHero.tagline)}
              </h2>
              <p className="mx-auto mt-5 max-w-[440px] text-center text-[17px] leading-7 text-white/50">
                {t(page.productHero.subtitle)}
              </p>
              <div className="product-hero-visual">
                <DeviceVisual type={page.productHero.visual} />
              </div>
            </section>
          ) : null}

          {page.productBlueprint ? (
            <section className={`${page.productHero || page.featureBlocks?.length || page.valueProps?.length ? "mt-20" : ""} soft-border overflow-hidden`}>
              <div className="px-6 py-8 md:px-10 md:py-10">
                <h2 className="text-[28px] font-normal leading-tight text-mist">{t(page.productBlueprint.title)}</h2>
                <div className="mt-10">
                  <BlueprintVisual type={page.productBlueprint.visual} />
                </div>
              </div>
              <div className="border-t border-white/10 px-6 py-7 md:px-10">
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {page.productBlueprint.dimensions.map((dim) => (
                    <div key={dim.label} className="grid gap-2 py-4 text-[15px] md:grid-cols-[0.34fr_0.66fr]">
                      <p className="text-white/42">{t(dim.label)}</p>
                      <p className="leading-6 text-white/68">{t(dim.value)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {page.deviceShowcase ? (
            <section className={`${page.productBlueprint || page.productHero || page.valueProps?.length || page.featureBlocks?.length ? "mt-20" : ""} soft-border overflow-hidden`}>
              <div className="grid gap-8 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8 lg:p-10">
                <div className="flex min-h-[430px] flex-col justify-between">
                  <div>
                    <p className="text-[14px] text-white/40">{t(page.deviceShowcase.eyebrow)}</p>
                    <h2 className="mt-5 max-w-[480px] text-[38px] font-normal leading-[1.04] text-mist md:text-[54px]">
                      {t(page.deviceShowcase.title)}
                    </h2>
                    <p className="mt-6 max-w-[440px] text-[17px] leading-7 text-white/52">{t(page.deviceShowcase.body)}</p>
                  </div>

                  <ul className="mt-10 grid gap-3">
                    {page.deviceShowcase.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-[15px] text-white/62">
                        <span className="h-1.5 w-1.5 rounded-full bg-mist/60" aria-hidden="true" />
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                </div>

                <DeviceVisual type={page.deviceShowcase.visual} />
              </div>

              <div className="border-t border-white/10 px-6 py-7 md:px-8 lg:px-10">
                <p className="text-[14px] text-white/38">{t("Technical parameters")}</p>
                <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                  {page.deviceShowcase.specs.map((row) => (
                    <div key={row.label} className="grid gap-2 py-4 text-[15px] md:grid-cols-[0.34fr_0.66fr]">
                      <p className="text-white/42">{t(row.label)}</p>
                      <p className="leading-6 text-white/68">{t(row.value)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {page.sections.length > 0 ? <div className={`${page.valueProps?.length || page.featureBlocks?.length || page.productBlueprint || page.deviceShowcase ? "mt-20" : ""} grid gap-3 lg:grid-cols-2`}>
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
          </div> : null}

          {page.metrics?.length ? (
            <div className="mt-20 grid gap-3 md:grid-cols-3">
              {page.metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`} className="border-y border-white/12 py-7">
                  <p className="text-[44px] font-normal leading-none text-mist">{t(metric.value)}</p>
                  <p className="mt-4 max-w-[250px] text-[15px] leading-6 text-white/48">{t(metric.label)}</p>
                </div>
              ))}
            </div>
          ) : null}

          {page.specGroups?.length ? (
            page.specGroups.length > 1 ? (
              <div className="mt-20 soft-border overflow-hidden">
                <div className="px-6 py-8 md:px-10 md:py-10">
                  <h2 className="text-[28px] font-normal leading-tight text-mist">{t("Product specifications")}</h2>
                </div>
                {page.specGroups.map((group) => (
                  <div key={group.title} className="border-t border-white/10 px-6 py-7 md:px-10">
                    <div className="grid gap-6 md:grid-cols-[0.3fr_0.7fr]">
                      <p className="text-[16px] text-white/42">{t(group.title)}</p>
                      <div className="divide-y divide-white/10 border-y border-white/10">
                        {group.rows.map((row) => (
                          <div key={row.label} className="py-4">
                            <p className="text-[15px] font-medium text-mist/90">{t(row.label)}</p>
                            <p className="mt-1 text-[14px] leading-6 text-white/48">{t(row.value)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-20 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                <div className="soft-border p-6 md:p-7">
                  {page.specGroups.map((group) => (
                    <div key={group.title}>
                      <h2 className="text-[28px] font-normal leading-tight text-mist">{t(group.title)}</h2>
                      <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
                        {group.rows.map((row) => (
                          <div key={row.label} className="grid gap-2 py-4 text-[15px] md:grid-cols-[0.38fr_0.62fr]">
                            <p className="text-white/42">{t(row.label)}</p>
                            <p className="leading-6 text-white/66">{t(row.value)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {page.faqs?.length ? (
                  <div className="soft-border p-6 md:p-7">
                    <h2 className="text-[28px] font-normal leading-tight text-mist">{t("Questions to answer")}</h2>
                    <div className="mt-6 grid gap-6">
                      {page.faqs.map((faq) => (
                        <article key={faq.question}>
                          <h3 className="text-[17px] font-normal leading-6 text-mist">{t(faq.question)}</h3>
                          <p className="mt-3 text-[15px] leading-7 text-white/48">{t(faq.answer)}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          ) : null}

          {page.faqs?.length && (page.specGroups?.length ?? 0) > 1 ? (
            <div className="mt-20 soft-border p-6 md:p-7">
              <h2 className="text-[28px] font-normal leading-tight text-mist">{t("Questions to answer")}</h2>
              <div className="mt-6 grid gap-6">
                {page.faqs.map((faq) => (
                  <article key={faq.question}>
                    <h3 className="text-[17px] font-normal leading-6 text-mist">{t(faq.question)}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/48">{t(faq.answer)}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

        </div>
      </section>
    </>
  );
}

function DeviceVisual({ type }: { type: "reader" | "gateway" }) {
  if (type === "gateway") {
    return (
      <div className="device-stage device-stage-gateway" aria-hidden="true">
        <div className="gateway-device">
          <span className="gateway-port gateway-port-one" />
          <span className="gateway-port gateway-port-two" />
          <span className="gateway-led gateway-led-one" />
          <span className="gateway-led gateway-led-two" />
          <span className="gateway-slot" />
        </div>
        <span className="device-shadow" />
      </div>
    );
  }

  return (
    <div className="device-stage device-stage-reader" aria-hidden="true">
      <div className="reader-device">
        <span className="reader-device-mark" />
        <span className="reader-device-light" />
        <span className="reader-device-line reader-device-line-one" />
        <span className="reader-device-line reader-device-line-two" />
      </div>
      <span className="device-shadow" />
    </div>
  );
}

function BlueprintVisual({ type }: { type: "reader" | "gateway" }) {
  if (type === "reader") {
    return (
      <div className="blueprint-visual" aria-hidden="true">
        <div className="blueprint-front">
          <div className="blueprint-reader-front">
            <span className="blueprint-reader-mark" />
          </div>
          <div className="blueprint-dim-v">
            <span className="blueprint-dim-line" />
            <span className="blueprint-dim-label">122 mm</span>
          </div>
          <div className="blueprint-dim-h">
            <span className="blueprint-dim-line" />
            <span className="blueprint-dim-label">50 mm</span>
          </div>
        </div>
        <div className="blueprint-side">
          <div className="blueprint-reader-side" />
          <div className="blueprint-dim-v blueprint-dim-v-short">
            <span className="blueprint-dim-line" />
            <span className="blueprint-dim-label">15 mm</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blueprint-visual" aria-hidden="true">
      <div className="blueprint-front">
        <div className="blueprint-gateway-front" />
        <div className="blueprint-dim-v">
          <span className="blueprint-dim-line" />
          <span className="blueprint-dim-label">210 mm</span>
        </div>
        <div className="blueprint-dim-h">
          <span className="blueprint-dim-line" />
          <span className="blueprint-dim-label">130 mm</span>
        </div>
      </div>
    </div>
  );
}

function ScenarioVisual({ type }: { type: "mobile-unlock" | "door-feedback" | "cloud-control" }) {
  if (type === "mobile-unlock") {
    return (
      <div className="scenario-visual scenario-mobile" aria-hidden="true">
        <div className="scenario-phone">
          <span />
          <span />
        </div>
        <div className="scenario-reader">
          <span />
        </div>
        <div className="scenario-signal scenario-signal-one" />
        <div className="scenario-signal scenario-signal-two" />
      </div>
    );
  }

  if (type === "door-feedback") {
    return (
      <div className="scenario-visual scenario-door" aria-hidden="true">
        <div className="scenario-door-panel">
          <span />
        </div>
        <div className="scenario-reader-dot" />
        <div className="scenario-open-line" />
      </div>
    );
  }

  return (
    <div className="scenario-visual scenario-cloud" aria-hidden="true">
      <div className="scenario-cloud-card">
        <span />
        <span />
        <span />
      </div>
      <div className="scenario-flow-line" />
      <div className="scenario-mini-reader" />
    </div>
  );
}
