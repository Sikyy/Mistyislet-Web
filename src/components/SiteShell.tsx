import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SmoothScroll } from "./SmoothScroll";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-obsidian text-mist">
      <SmoothScroll />
      <div className="site-noise" aria-hidden="true" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
