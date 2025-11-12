export default function StatisticsIcon({
  size = 64,
  color = "#2C7A7B",
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
      <rect x="10" y="40" width="6" height="14" fill="#81E6D9" />
      <rect x="22" y="32" width="6" height="22" fill="#4FD1C5" />
      <rect x="34" y="24" width="6" height="30" fill="#38B2AC" />
      <rect x="46" y="28" width="6" height="26" fill="#2C7A7B" />
      <path d="M10 48c6-18 16-22 22-22s12 4 20 22" stroke="#285E61" />
    </svg>
  );
}
