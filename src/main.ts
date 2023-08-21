import * as https from "https";
import * as cron from "node-cron";

const URL = process.env.URL as string;
const SCHEDULE = process.env.SCHEDULE as string || "* * * * *";

async function main(): Promise<void> {
  if (!URL) {
    console.error("No URL environment variable set");
    process.exit(1);
  }

  console.log(new Date().toISOString(), `Starting schedule ${SCHEDULE} to ${URL}`);
  cron.schedule(SCHEDULE, () => {
    sendPing();
  });
}

main().catch((e: Error) => console.log("e", e.message));

function sendPing() {
  console.log(new Date().toISOString(), "Sending Ping");
  https.get(URL, res => {
    console.log(new Date().toISOString(), `Ping sent: ${res.statusCode}`);
  }).on("error", err => {
    console.error(new Date().toISOString(), "Ping failed:", err.message);
  });
}
