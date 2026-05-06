import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "14px",
          color: "white",
          fontSize: 40,
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
