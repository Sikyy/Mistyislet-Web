import { Check } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { pricingPlans, primaryCta } from "../content/site-content";
import { useI18n } from "../i18n";

type BillingPeriod = "monthly" | "yearly";

function splitPrice(price: string) {
  const [main, ...rest] = price.split(" ");

  return {
    main,
    suffix: rest.join(" "),
  };
}

export function PricingSection() {
  const { t } = useI18n();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="section-shell">
      <div className="section-inner">
        <div className="flex flex-col gap-8">
          <SectionHeader
            title="Plans for pilots, buildings, and multi-site operations"
          />

          <div
            className="inline-grid w-fit grid-cols-[auto_52px_auto_auto] items-center gap-4"
            role="group"
            aria-label={t("Billing period")}
          >
            <button type="button" onClick={() => setBillingPeriod("monthly")} className="text-left text-[17px] text-white/52">
              {t("Monthly")}
            </button>
            <button
              type="button"
              aria-label={t("Toggle billing period")}
              aria-pressed={billingPeriod === "yearly"}
              onClick={() => setBillingPeriod((period) => (period === "monthly" ? "yearly" : "monthly"))}
              className="relative h-7 rounded-full border border-white/12 bg-white/5"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-mist transition ${
                  billingPeriod === "yearly" ? "left-6" : "left-1"
                }`}
              />
            </button>
            <button type="button" onClick={() => setBillingPeriod("yearly")} className="text-left text-[17px] text-white/52">
              {t("Yearly")}
            </button>
            <span className="rounded-full border border-white/12 px-4 py-2 text-[15px] text-mist/80">
              {t("20% OFF")}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const { main, suffix } = splitPrice(price);

            return (
              <article
                key={plan.name}
                className="soft-border relative min-h-[510px] p-6"
              >
                {plan.badge ? (
                  <span className="absolute right-6 top-7 rounded-full border border-white/12 px-3 py-1 text-[14px] text-mist">
                    {t(plan.badge)}
                  </span>
                ) : null}
                <h3 className="text-[21px] font-normal text-mist">{t(plan.name)}</h3>
                <div className="mt-8 min-h-[76px]">
                  <p className="text-[54px] font-normal leading-none text-mist">{t(main)}</p>
                  {suffix ? <p className="mt-1 text-[20px] text-white/55">{t(suffix)}</p> : null}
                </div>
                <p className="mt-5 min-h-20 text-[15px] leading-[1.4] text-white/48">{t(plan.description)}</p>

                <ButtonLink href="#top" className="mt-2 w-full min-h-10 py-2 text-[14px]">
                  {t(primaryCta)}
                </ButtonLink>

                <p className="mt-8 text-[15px] text-white/70">{t("Features")}</p>
                <ul className="mt-4 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[14px] text-white/48">
                      <Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-white/70" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
