// 화면에 보여 줄 링크 목록. id는 클릭 수를 저장할 때 쓰는 고유 키 (바꾸면 기존 클릭 수와 연결이 끊김)
export const links = [
  { id: "github", title: "GitHub", url: "https://github.com/YUNHWAM-KIM", emoji: "💻" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/", emoji: "💼" },
  { id: "blog", title: "Blog", url: "https://example.com/", emoji: "✍️" },
];

export type Link = (typeof links)[number];

export const linkIds = links.map((link) => link.id);
