import { ImageResponse } from "next/og";
import OpengraphImage from "./opengraph-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  // Reuse the same branded card for Twitter / X
  return OpengraphImage();
}
