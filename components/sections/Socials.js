import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/MinusOne-01" },
  { label: "Leetcode", href: "https://leetcode.com/u/minus-1/" },
  { label: "Email", href: "mailto:sgone2842@gmail.com" },
];

export default function Socials() {
  return (
    <div className="w-full max-w-3xl text-center flex flex-col items-center -translate-y-10">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Let&apos;s build something
      </h2>

      <p className="text-white/50 mt-2 mb-12">
        find me here
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            className="
              group
              w-4/5 sm:w-full mx-auto
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-6 py-6
              text-sm
              flex items-center justify-center
              transition-all duration-300
              hover:bg-white/[0.08]
              hover:border-white/20
            "
          >
            <span className="relative inline-flex items-center text-white/80 group-hover:text-white">
              <span>{item.label}</span>
              <span className="absolute -right-4 opacity-0 group-hover:opacity-100 transition">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
