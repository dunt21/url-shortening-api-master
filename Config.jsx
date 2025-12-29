const CLEAN_API = "https://cleanuri.com/api/v1/shorten";

export default async function PostApi(url) {
  try {
    const res = await fetch("/api/api/v1/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ url: url }),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    const error = err;

    throw error;
  }
}
