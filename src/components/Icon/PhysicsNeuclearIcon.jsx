export default function PhysicsNeuclearIcon({
  size = 64,
  color = "#805AD5",
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
      <circle cx="32" cy="32" r="4" fill="#B794F4" />
      <ellipse
        cx="32"
        cy="32"
        rx="20"
        ry="10"
        transform="rotate(45 32 32)"
        stroke="#9F7AEA"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="20"
        ry="10"
        transform="rotate(-45 32 32)"
        stroke="#6B46C1"
      />
      <ellipse cx="32" cy="32" rx="10" ry="20" stroke="#553C9A" />
    </svg>
  );
}
