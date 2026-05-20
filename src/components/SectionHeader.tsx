import { useI18n } from "../i18n";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, body, align = "left" }: SectionHeaderProps) {
  const { t } = useI18n();

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-6 flex items-center gap-2 text-[15px] text-white/42">
          <span className="h-2 w-2 rounded-full bg-white/35" aria-hidden="true" />
          {t(eyebrow)}
        </p>
      ) : null}
      <h2 className="text-balance text-[34px] font-normal leading-[1.08] text-mist md:text-[46px]">
        {t(title)}
      </h2>
      {body ? <p className="mt-5 text-[17px] leading-7 text-white/48">{t(body)}</p> : null}
    </div>
  );
}
