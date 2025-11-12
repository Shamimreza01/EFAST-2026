export default function PharmaDrugIcon({
  size = 64,
  color = "#2C5282",
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
      <rect x="14" y="20" width="16" height="24" rx="8" fill="#90CDF4" />
      <rect x="34" y="20" width="16" height="24" rx="8" fill="#63B3ED" />
      <circle cx="32" cy="32" r="3" fill="#2B6CB0" />
      <path d="M42 16 q10 8 10 24 t-10 24" stroke="#2B6CB0" opacity="0.6" />
    </svg>
  );
}
