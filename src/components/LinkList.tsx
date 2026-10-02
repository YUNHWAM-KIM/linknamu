"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0])),
  );

  useEffect(() => {
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) => {
        // 조회가 끝나기 전에 누른 클릭이 지워지지 않도록 더 큰 값을 유지
        setCounts((prev) => {
          const next = { ...prev };
          for (const [id, count] of Object.entries(data.counts)) {
            next[id] = Math.max(prev[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch((error) => console.error("클릭 수를 불러오지 못했습니다:", error));
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 반영하고, 서버 응답이 오면 실제 값으로 맞춘다
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count: number }) => setCounts((prev) => ({ ...prev, [id]: data.count })))
      .catch((error) => console.error("클릭 수를 저장하지 못했습니다:", error));
  }

  return (
    <ul className="mt-10 flex w-full flex-col gap-4 sm:mt-12">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            emoji={link.emoji}
            count={counts[link.id] ?? 0}
            onOpen={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
