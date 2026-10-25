import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = [
    // Falls back to the original purple palette if the theme tokens are missing
    "var(--grad-1, #ec4899)",
    "var(--grad-2, #c654ba)",
    "var(--grad-3, #a855f7)",
    "var(--grad-4, #7c5ef5)",
    "var(--grad-5, #6366f1)",
  ], // Theme-aware defaults (see src/theme/themes.css)
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
