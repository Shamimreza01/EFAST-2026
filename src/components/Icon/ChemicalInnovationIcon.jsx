export default function ChemicalInnovationIcon({
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
      <polygon
        points="32,10 48,20 48,40 32,50 16,40 16,20 32,10"
        fill="#9AE6B4"
        opacity="0.5"
      />
      <circle cx="32" cy="30" r="4" fill="#48BB78" />
      <path d="M50 14l4-4M10 50l4-4" stroke="#22543D" />
    </svg>
  );
}
