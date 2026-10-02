import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "김길동",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/160x160/orange/white/png",
};

const links = [
  { title: "GitHub", url: "https://github.com/", emoji: "💻" },
  { title: "LinkedIn", url: "https://www.linkedin.com/", emoji: "💼" },
  { title: "Blog", url: "https://example.com/", emoji: "✍️" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-sm flex-col items-center px-6 py-16 sm:py-24">
      <ProfileHeader {...profile} />

      <ul className="mt-10 flex w-full flex-col gap-4 sm:mt-12">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
