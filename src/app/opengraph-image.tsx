import { ImageResponse } from "next/og";

import { OG, OG_SIZE, loadOgAssets } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "Andrew Jones · dremnik";
export const size = OG_SIZE;
export const contentType = "image/png";

// Branded default OG card for the site root (inherited by routes without their
// own opengraph-image). Photo avatar, name in Geist, mono footer.
export default async function Image() {
  const { avatar, fonts } = await loadOgAssets();

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
        {/* empty top slot keeps the main block vertically centered */}
        <div style={{ display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            width={132}
            height={132}
            style={{ borderRadius: 999, objectFit: "cover" }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              fontSize: 100,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              marginTop: 30,
            }}
          >
            Andrew Jones
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: OG.muted,
              marginTop: 20,
              maxWidth: 960,
            }}
          >
            Founder, designer, and engineer operating at the frontier of
            human–machine collaboration.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "SFMono",
            fontSize: 22,
            color: OG.steel,
          }}
        >
          dremnik.com
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
