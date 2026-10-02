export default async function handler(req, res) {
  const source =
    "https://servatmandi.com/Entity/Summary/50000000001301";

  try {
    const response = await fetch(source, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      return res.status(502).json({
        ok: false,
        error: "SOURCE_UNAVAILABLE",
        status: response.status
      });
    }

    const contentType =
      response.headers.get("content-type") || "";

    const body = await response.text();

    return res.status(200).json({
      ok: true,
      contentType,
      body
    });

  } catch (error) {

    return res.status(502).json({
      ok: false,
      error: "FETCH_FAILED"
    });

  }
      }
