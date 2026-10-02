import { NextResponse } from "next/server";
import { linkIds } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 한 번에 반환: { counts: { github: 3, ... } }
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: linkIds } }).toArray();

    const counts: Record<string, number> = Object.fromEntries(linkIds.map((id) => [id, 0]));
    for (const doc of docs) {
      counts[doc._id] = doc.count;
    }
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 링크 하나의 클릭 수를 1 늘리고 새 값을 반환: body { id: "github" } → { count: 4 }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (typeof id !== "string" || !linkIds.includes(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    const doc = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ count: doc?.count ?? 0 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
