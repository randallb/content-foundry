#! /usr/bin/env -S deno run --allow-net=localhost:8000

Deno.serve((req) => {
  const originalUrl = new URL(req.url);
  const redirectUrl = new URL(originalUrl.pathname + originalUrl.search, "https://astroforge.com");

  return new Response("Redirecting to astroforge.com", {
    status: 301,
    headers: {
      Location: redirectUrl.toString(),
    },
  });
});
