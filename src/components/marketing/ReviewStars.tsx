import { Star } from "lucide-react";

export function ReviewStars({
  rating,
  size = "h-4 w-4",
  className = "",
}: {
  rating: number;
  size?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${size} ${n <= Math.round(rating) ? "text-clay" : "text-line-strong"}`}
          fill={n <= Math.round(rating) ? "currentColor" : "none"}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </span>
  );
}
