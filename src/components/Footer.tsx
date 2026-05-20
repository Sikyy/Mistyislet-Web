import { Gamepad2, Linkedin, X } from "lucide-react";
import { footer } from "../content/site-content";
import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();
  const icpRecord = import.meta.env.VITE_ICP_RECORD?.trim();
  const socialLinks = [
    { label: "X", icon: X },
    { label: "Discord", icon: Gamepad2 },
    { label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0d0d0c] py-12">
      <div className="section-inner flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="/" className="flex items-center gap-3" aria-label="Mistyislet home">
            <img
              src="/assets/mistyislet-logo-white-transparent.png"
              alt={footer.brand}
              className="h-14 w-auto select-none"
            />
          </a>
          <p className="mt-5 text-[15px] leading-6 text-white/48">{t(footer.body)}</p>
          <div className="mt-7 flex items-center gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href="#top"
                  aria-label={item.label}
                  className="text-white/72 transition hover:text-mist"
                >
                  <Icon aria-hidden="true" size={21} strokeWidth={1.55} />
                </a>
              );
            })}
          </div>
          <div className="mt-16 grid gap-2 text-[13px] text-white/42">
            <p>{t(footer.copyright)}</p>
            {icpRecord ? (
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition hover:text-mist"
              >
                {icpRecord}
              </a>
            ) : null}
          </div>
        </div>

        <div className="grid gap-8 md:gap-16">
          <nav aria-label="Footer navigation" className="grid gap-3">
            <p className="mb-1 text-[13px] text-white/36">{t("Navigation")}</p>
            {footer.navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[14px] text-white/52 hover:text-mist">
                {t(item.label)}
              </a>
            ))}
          </nav>

          {footer.socials.length > 0 ? (
            <nav aria-label="Resources" className="grid gap-3">
              {footer.socials.map((item) => (
                <a key={item.label} href={item.href} className="text-[14px] text-white/52 hover:text-mist">
                  {t(item.label)}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
