export default function CyberSecurityIcon({
  size = 64,
  color = "#2A4365",
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
      <rect x="24" y="28" width="16" height="20" rx="4" fill="#63B3ED" />
      <path d="M28 28v-4a4 4 0 0 1 8 0v4" stroke="#2C5282" fill="#2C5282" />
      <circle cx="32" cy="38" r="2" fill="#DD6B20" />
      <path
        d="M8 32a24 24 0 0 1 48 0 24 24 0 0 1-48 0z"
        fill="#CBD5E0"
        opacity=".2"
      />
    </svg>
  );
}
