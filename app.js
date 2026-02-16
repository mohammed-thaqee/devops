const apiKey = process.env.WEATHER_API_KEY;
if (!apiKey) {
  console.error("CRITICAL ERROR: No API Key found!");
  process.exit(1);
}
console.log("App is running securely.");
