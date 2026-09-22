import { createClient } from "redis";
import { env } from "./env";

const redis = createClient({
  url: env.REDIS_URL,
});

redis.on("error", (error) => {
  console.error("Redis Client Error", error);
});

export default redis;
