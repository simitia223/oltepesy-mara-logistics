import Image from "next/image";
import { Icon } from "./Icon";

/**
 * Image slot with a labelled placeholder.
 *
 * Until real OLTEPESY photography is supplied, this renders a styled placeholder
 * describing the shot that belongs here. To use a real image, drop the file in
 * `public/photos/` and pass `src="/photos/your-file.jpg"`.
 *
 * `variant="background"` renders only a faint texture (no label) — for use
 * behind text, e.g. the hero.
 */
export function Photo({
  src,
  alt,
  brief,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  variant = "block",
}: {
  src?: string;
  alt: string;
  /** One line describing the photo that should go here. */
  brief: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "block" | "background";
}) {
  if (src) {
    // SVG assets (incl. our brand placeholder illustrations) render as a plain
    // <img> — next/image's optimizer rejects SVG and adds nothing for a vector.
    if (src.endsWith(".svg")) {
      return (
        <div className={`relative overflow-hidden ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
          />
        </div>
      );
    }
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  if (variant === "background") {
    // No image yet — render nothing visible. The section's own gradient carries
    // the look until a real `src` is supplied, at which point it becomes the
    // background image.
    return <div className={className} aria-hidden data-photo-slot={brief} />;
  }

  return (
    <div
      className={`photo-placeholder flex items-center justify-center overflow-hidden border border-line ${className}`}
      role="img"
      aria-label={`Photo placeholder: ${alt}`}
    >
      <div className="max-w-xs px-6 py-8 text-center">
        <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-ink/70 text-clay">
          <Icon name="pin" className="h-4 w-4" />
        </span>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Photo
        </p>
        <p className="mt-1 text-sm text-fg/70">{brief}</p>
      </div>
    </div>
  );
}
