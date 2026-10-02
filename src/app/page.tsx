import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links } from "@/lib/links";

const profile = {
  name: "김길동",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/160x160/orange/white/png",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-sm flex-col items-center px-6 py-16 sm:py-24">
      <ProfileHeader {...profile} />
      <LinkList links={links} />
    </main>
  );
}
