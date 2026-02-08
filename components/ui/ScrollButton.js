'use client'

export default function ScrollIndicator({ targetId }) {

  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTarget}
      className="left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center text-white/50 cursor-pointer z-10"
    >
      <div className="h-10 w-px bg-white/20 mb-1"></div>
      <svg
        className="w-5 h-5 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
