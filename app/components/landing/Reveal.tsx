export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`reveal translate-y-[22px] opacity-0 transition-[opacity,transform] duration-600 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 [&.in]:translate-y-0 [&.in]:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}
