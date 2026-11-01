export function GET() {
  return new Response("google-site-verification: googlee4cbd8ada6d64925.html", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

