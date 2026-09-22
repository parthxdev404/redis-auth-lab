import app from "./app";
import redis from "./config/redis";
import { env } from "./config/env";

const PORT = env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    await redis.connect();
    console.log("Redis Connected");

    app.listen(PORT, () => {
      console.log(`Server running successfully on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

void startServer();
