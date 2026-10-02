type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-white/15 dark:bg-white/5"
    >
      {title}
    </a>
  );
}
