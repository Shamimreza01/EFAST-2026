export default function MathModelIcon({
  size = 64,
  color = "#2B6CB0",
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
      <polygon
        points="32,4 60,20 32,36 4,20 32,4"
        fill="#63B3ED"
        opacity="0.3"
      />
      <path d="M4 20v24l28 16 28-16V20" stroke="#2C5282" />
      <path d="M10 32q10-10 22 0t22 0" stroke="#4299E1" />
    </svg>
  );
}
