import "dotenv/config";
import { cleanEnv, str, port } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "testing", "production"],
    default: "development",
  }),

  PORT: port({
    default: 5000,
  }),

  REDIS_URL: str(),
  DATABASE_URL: str(),
  JWT_ACCESS_SECRET: str(),
  JWT_REFRESH_SECRET: str(),
});
