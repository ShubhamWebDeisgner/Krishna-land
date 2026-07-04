export default function Badge({ icon, label, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 self-start
                    bg-[#f5f5f5] rounded-full px-4 py-2 ${className}`}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      <span
        className="font-semibold text-[12px] font-normal leading-[16px]
                       tracking-[4px] uppercase text-[#0b2545] whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
}
