import { MongoClient } from "mongodb";

type ClickDoc = { _id: string; count: number };

// 개발 모드에서는 코드가 바뀔 때마다 모듈이 다시 불러와지므로, 연결을 global에 보관해 재사용한다
const globalForMongo = globalThis as unknown as { mongoClientPromise?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  if (!globalForMongo.mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
    }
    globalForMongo.mongoClientPromise = new MongoClient(uri).connect().catch((error) => {
      // 연결에 실패하면 다음 요청에서 다시 시도할 수 있도록 비워 둔다
      globalForMongo.mongoClientPromise = undefined;
      throw error;
    });
  }
  return globalForMongo.mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
