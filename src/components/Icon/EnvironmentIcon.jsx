export default function EnvironmentIcon({
  size = 64,
  color = "#2F855A",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      {...props}
    >
      <circle cx="32" cy="32" r="20" fill="#9AE6B4" opacity="0.5" />
      <path d="M12 34c8 0 8-8 16-8s8 8 16 8 8-8 16-8" stroke="#38A169" />
      <path d="M28 50c4-6 8-10 12-14" stroke="#276749" />
      <path d="M36 18l4-8m-8 8l-4-8" stroke="#68D391" />
    </svg>
  );
}
