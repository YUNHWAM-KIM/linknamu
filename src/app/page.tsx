import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 보여 주기용 더미 데이터 (사진: 탄지로 모티프 직접 그린 SVG) — 나중에 실제 내용으로 교체
const profile = {
  name: "홍길동",
  bio: "웹 개발을 좋아하는 프리랜서 개발자입니다",
  imageUrl: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
      <ProfileHeader {...profile} />

      <ul className="mt-8 flex w-full flex-col gap-5 sm:gap-6">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
