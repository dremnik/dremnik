import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";

import { OG, OG_SIZE, loadOgAssets } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "dremnik essay";
export const size = OG_SIZE;
export const contentType = "image/png";

// Per-post OG card: the post title set in Geist (matching the on-page title),
// with a photo + name byline. Falls back gracefully if the slug is unknown.
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "dremnik";

  const { avatar, fonts } = await loadOgAssets();

  // Scale the title down a touch for longer headlines.
  const fontSize = title.length > 48 ? 66 : title.length > 30 ? 80 : 94;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: OG.bg,
          padding: "76px 80px",
          color: OG.ink,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "SFMono",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: OG.steel,
          }}
        >
          • essay
        </div>

        <div
          style={{
            display: "flex",
            fontSize,
            fontWeight: 500,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            width={84}
            height={84}
            style={{ borderRadius: 999, objectFit: "cover" }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 38, fontWeight: 500, letterSpacing: "-0.025em" }}>
              Andrew Jones
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "SFMono",
                fontSize: 21,
                color: OG.steel,
                marginTop: 4,
              }}
            >
              dremnik.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
