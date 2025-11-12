export default function AIComputingIcon({
  size = 64,
  color = "#3182CE",
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
      <rect x="20" y="20" width="24" height="24" rx="12" fill="#BEE3F8" />
      <path d="M20 32H10M54 32H44M32 20V10M32 54V44" stroke="#63B3ED" />
      <circle cx="32" cy="32" r="3" fill="#4299E1" />
    </svg>
  );
}
