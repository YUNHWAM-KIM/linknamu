type LinkCardProps = {
  title: string;
  url: string;
  emoji?: string;
  count: number;
  onOpen: () => void;
};

export default function LinkCard({ title, url, emoji, count, onOpen }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onOpen}
      // 마우스 휠 버튼으로 새 탭에서 여는 경우도 클릭으로 센다
      onAuxClick={(e) => e.button === 1 && onOpen()}
      className="relative flex w-full items-center justify-center gap-2.5 rounded-3xl border border-white/70 bg-white/45 px-16 py-[1.125rem] text-[15px] font-semibold shadow-[0_10px_30px_-18px_rgba(150,80,40,0.45)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_14px_34px_-18px_rgba(150,80,40,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] dark:hover:bg-white/10"
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {title}
      <span className="absolute right-6 text-xs font-medium tabular-nums opacity-50">
        <span className="sr-only">클릭 수 </span>
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
