type LinkCardProps = {
  title: string;
  url: string;
  emoji?: string;
};

export default function LinkCard({ title, url, emoji }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2.5 rounded-3xl border border-white/70 bg-white/45 px-6 py-[1.125rem] text-[15px] font-semibold shadow-[0_10px_30px_-18px_rgba(150,80,40,0.45)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_14px_34px_-18px_rgba(150,80,40,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] dark:hover:bg-white/10"
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {title}
    </a>
  );
}
