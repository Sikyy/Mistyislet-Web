import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavMegaMenu, NavItem } from "../content/site-content";
import { navItems, primaryCta } from "../content/site-content";

function MegaMenu({ menu }: { menu: NavMegaMenu }) {
  const { t } = useI18n();
  const gridClass =
    menu.columns.length > 2
      ? "lg:grid-cols-[0.95fr_0.95fr_0.95fr_1.45fr]"
      : "lg:grid-cols-[1fr_1fr_1.45fr]";

  return (
    <div className={`grid gap-8 py-9 ${gridClass}`}>
      {menu.columns.map((column) => (
        <div key={column.heading}>
          <p className="mb-4 text-[18px] font-medium text-mist">{t(column.heading)}</p>
          <div className="grid gap-1">
            {column.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="-mx-3 block rounded-[6px] px-3 py-2 transition hover:bg-white/[0.045]"
              >
                <span className="block text-[15px] font-medium text-white/78 transition group-hover:text-mist">
                  {t(link.label)}
                </span>
                {link.body ? (
                  <span className="mt-1 block max-w-[250px] text-[13px] leading-5 text-white/42">
                    {t(link.body)}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="grid gap-4">
        {menu.features.map((feature) => (
          <a
            key={feature.title}
            href={feature.href}
            className="group relative min-h-[168px] overflow-hidden rounded-[6px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 transition duration-500 group-hover:scale-[1.03]"
              style={{
                background: `linear-gradient(180deg, rgba(13,13,12,0.18), rgba(13,13,12,0.78)), url('${feature.image}') center center / cover no-repeat`,
              }}
            />
            <div className="relative z-10 flex min-h-[128px] flex-col justify-between">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-medium text-mist/72">{t(feature.eyebrow)}</p>
                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="text-mist/62 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mist"
                />
              </div>
              <div>
                <p className="text-[20px] font-medium leading-[1.15] text-mist">{t(feature.title)}</p>
                <p className="mt-2 max-w-[310px] text-[13px] leading-5 text-mist/62">{t(feature.body)}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileMenuItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const { t } = useI18n();

  return (
    <div className="border-b border-white/10 pb-3 last:border-b-0">
      <a
        href={item.href}
        onClick={onNavigate}
        className="flex items-center justify-between rounded-[6px] px-3 py-3 text-[15px] font-medium text-mist"
      >
        {t(item.label)}
        {item.menu ? <ChevronDown aria-hidden="true" size={16} className="-rotate-90 text-white/42" /> : null}
      </a>

      {item.menu ? (
        <div className="grid gap-4 pl-3 pr-1">
          {item.menu.columns.map((column) => (
            <div key={column.heading} className="border-l border-white/10 pl-4">
              <p className="mb-2 text-[12px] uppercase tracking-[0.12em] text-white/32">{t(column.heading)}</p>
              <div className="grid gap-1">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={onNavigate}
                    className="rounded-[6px] py-2 text-[14px] text-white/58 transition hover:text-mist"
                  >
                    {t(link.label)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<NavItem | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return (
    <header
      className="fixed left-0 right-0 top-6 z-50 bg-transparent"
      onMouseLeave={() => setActiveItem(null)}
    >
      <div className="mx-auto flex h-12 w-[min(1240px,calc(100%_-_32px))] items-center justify-between md:grid md:w-[min(1240px,calc(100%_-_48px))] md:grid-cols-[250px_minmax(0,1fr)_250px]">
        <a href="/" className="flex items-center gap-3 justify-self-start" aria-label="Mistyislet home">
          <img
            src="/assets/mistyislet-mark-white-transparent.png"
            alt=""
            aria-hidden="true"
            className="h-[22px] w-auto select-none"
          />
          <span className="text-[18px] font-medium text-mist">Mistyislet</span>
        </a>

        <nav className="hidden items-center justify-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeItem?.label === item.label;

            if (item.menu) {
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] transition ${
                    isActive ? "bg-white/[0.07] text-mist" : "text-white/62 hover:text-mist"
                  }`}
                  aria-expanded={isActive}
                  aria-haspopup="true"
                  onMouseEnter={() => setActiveItem(item)}
                  onFocus={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)}
                >
                  {t(item.label)}
                  <ChevronDown
                    aria-hidden="true"
                    size={15}
                    className={`transition duration-200 ${isActive ? "rotate-180" : ""}`}
                  />
                </button>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[15px] text-white/62 transition hover:text-mist"
                onMouseEnter={() => setActiveItem(null)}
                onFocus={() => setActiveItem(null)}
              >
                {t(item.label)}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center justify-self-end gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="/pricing"
            className="rounded-full border border-white/12 px-5 py-2 text-[15px] font-medium text-mist transition hover:border-white/28 hover:bg-white/[0.06] hover:text-white"
            onMouseEnter={() => setActiveItem(null)}
            onFocus={() => setActiveItem(null)}
          >
            {t(primaryCta)}
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white/[0.06] text-mist md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => {
            setIsOpen((value) => !value);
            setActiveItem(null);
          }}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {activeItem?.menu ? (
        <div className="hidden pt-4 md:block">
          <div className="border-y border-white/10 bg-[#151514]/[0.98] shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
            <div className="mx-auto w-[min(1240px,calc(100%_-_48px))]">
              <MegaMenu menu={activeItem.menu} />
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? (
        <div className="mt-3 max-h-[calc(100svh-92px)] overflow-y-auto border-y border-white/10 bg-obsidian/96 px-4 py-5 backdrop-blur-xl md:hidden">
          <nav className="mx-auto grid max-w-6xl gap-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <MobileMenuItem key={item.label} item={item} onNavigate={closeMenu} />
            ))}
            <LanguageSwitcher />
            <a
              href="/pricing"
              onClick={closeMenu}
              className="rounded-full bg-mist px-4 py-3 text-center text-sm font-semibold text-obsidian"
            >
              {t(primaryCta)}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
