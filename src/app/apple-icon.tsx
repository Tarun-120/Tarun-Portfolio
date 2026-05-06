import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #6366f1 0%, #c084fc 50%, #f472b6 100%)",
          color: "white",
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        T
      </div>
    ),
    { ...size },
  );
}
