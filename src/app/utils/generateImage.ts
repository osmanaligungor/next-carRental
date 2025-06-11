import { Car } from "../types";

const generateImage = (car: Car, angle?: string, surr?: number): string => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelType", car.model);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", String(car.year));
  url.searchParams.append("randomPaint", "true");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  if (typeof surr === "number") {
    url.searchParams.append("surrounding", "sur3");
    url.searchParams.append("viewPoint", String(surr));

    url.searchParams.append("overlayArea", "none");
  }

  return url.href;
};
export default generateImage;
