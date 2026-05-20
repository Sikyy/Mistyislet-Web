import { languageOptions, useI18n } from "../i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className="inline-flex rounded-full border border-white/12 bg-white/[0.035] p-1"
      role="group"
      aria-label={t("Language")}
    >
      {languageOptions.map((option) => {
        const selected = option.locale === locale;
        return (
          <button
            key={option.locale}
            type="button"
            aria-pressed={selected}
            className={`min-h-8 min-w-9 whitespace-nowrap rounded-full px-3 text-[12px] font-medium transition ${
              selected ? "bg-mist text-obsidian" : "text-white/48 hover:text-mist"
            }`}
            onClick={() => setLocale(option.locale)}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
