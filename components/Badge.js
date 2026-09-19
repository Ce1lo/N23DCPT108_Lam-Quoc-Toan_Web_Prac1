const tones = {
  indigo: "bg-[#E1F3FE] text-[#1F6C9F]",
  gray: "bg-[#F1F1EF] text-[#6B6B66]",
};

export default function Badge({ label, color = "indigo" }) {
  const tone = tones[color] || tones.indigo;

  return (
    <span
      className={`inline-flex items-center text-[11px] font-medium uppercase tracking-[0.05em] px-2.5 py-1 rounded-full ${tone}`}
    >
      {label}
    </span>
  );
}
