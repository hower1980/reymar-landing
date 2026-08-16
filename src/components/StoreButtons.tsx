function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="h-7 w-7 fill-white" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-6 w-6" aria-hidden="true">
      <path d="M47 460.4L272.5 235 47 9.6C36 15.3 29 26.3 29 39v434c0 12.7 7 23.7 18 29.4z" fill="#00d2ff" />
      <path d="M272.5 235L47 9.6c2.9-1.5 6.2-2.4 9.7-2.4 5.2 0 10.3 1.5 14.6 4.4l255.2 147.3-53.9 76z" fill="#00f076" />
      <path d="M326.6 158.9L71.4 11.6C68.1 9.7 64.3 8.4 60.3 8L272.5 235l54.1-76.1z" fill="#00f076" />
      <path d="M377.9 205.1l-51.3-29.6-54.1 59.5 54.1 59.5 51.5-29.7c15.4-8.9 15.4-31.7-.2-59.7z" fill="#ffce00" />
      <path d="M71 462.4c3.4-.3 6.8-1.3 9.9-3.1l246-142-51.5-56.8L47 460.4c3.9 2.3 8.4 3.4 13 3.4.9 0 2-.1 3-.2z" fill="#ff3a44" opacity="0" />
      <path d="M326.6 293.1L71.4 440.4c-3.6 2.1-7.7 3.4-12 3.7L272.5 235l54.1 58.1z" fill="#ff3a44" />
    </svg>
  );
}

export function StoreButtons({
  align = "start",
  id,
}: {
  align?: "start" | "center";
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`flex scroll-mt-24 flex-col gap-3 sm:flex-row ${
        align === "center" ? "items-center justify-center" : "items-stretch"
      }`}
    >
      <a
        href="#"
        className="flex items-center gap-3 rounded-xl border border-border-subtle bg-black px-5 py-3 transition-transform hover:scale-[1.03] hover:border-white/30"
      >
        <AppleIcon />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[11px] text-gray-300">Descárgalo en el</span>
          <span className="text-lg font-semibold text-white">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-xl border border-border-subtle bg-black px-5 py-3 transition-transform hover:scale-[1.03] hover:border-white/30"
      >
        <PlayIcon />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[11px] text-gray-300">Disponible en</span>
          <span className="text-lg font-semibold text-white">Google Play</span>
        </span>
      </a>
    </div>
  );
}
