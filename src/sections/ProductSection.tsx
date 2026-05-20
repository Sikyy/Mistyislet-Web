import { SectionHeader } from "../components/SectionHeader";
import { productCards } from "../content/site-content";
import { useI18n } from "../i18n";

const productImages = [
  "/assets/framer-card-01.jpg",
  "/assets/framer-card-02.jpg",
  "/assets/framer-card-03.jpg",
];

export function ProductSection() {
  const { t } = useI18n();

  return (
    <section id="product" className="section-shell pt-36">
      <div className="section-inner">
        <div className="flex flex-col gap-12 md:gap-14">
          <SectionHeader
            title="Readers and edge gateways, built for every door."
          />

          <div className="grid gap-3 md:grid-cols-3">
            {productCards.map((card, index) => {
              return (
                <article key={card.title}>
                  <div className="relative aspect-[1.13] overflow-hidden bg-white/[0.025]">
                    <img
                      src={productImages[index]}
                      alt=""
                      className="h-full w-full object-cover opacity-95"
                    />
                    <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[21px] font-normal text-mist">{t(card.title)}</h3>
                  <p className="mt-2 text-[16px] leading-[1.35] text-white/50">{t(card.body)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
