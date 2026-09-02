"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { primaryCta, whatsappLink } from "@/lib/site";

export function FloatingCta() {
  const pathname = usePathname();
  const onBooking = pathname.startsWith("/book");

  return (
    <>
      {/* Desktop — floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp OLTEPESY"
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full border border-line-strong bg-surface/90 px-4 py-3 text-sm font-medium text-fg shadow-[0_16px_44px_-14px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all hover:border-acacia/60 hover:text-sand lg:inline-flex"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-acacia text-[#10160c]">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
        </span>
        WhatsApp OLTEPESY
      </a>

      {/* Mobile — sticky action bar */}
      {!onBooking && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex items-center gap-3">
            <Link
              href={primaryCta.href}
              className="flex-1 rounded-full bg-clay px-5 py-3 text-center text-sm font-semibold text-[#1c1108]"
            >
              {primaryCta.label}
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp OLTEPESY"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-strong text-fg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
