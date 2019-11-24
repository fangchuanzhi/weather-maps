declare let mapboxgl: typeof import("mapbox-gl");

import { creatMap } from "./map.js";
import { fetch } from "./util.js";
// import TriangleLayer from "./TriangleLayer.js";
import WindLayer from "./WindLayer.js";

async function init(): Promise<void> {
  (mapboxgl as any).accessToken = await fetch("/mapboxToken");
  const map = creatMap("map");
  const layer = new WindLayer(map);

  (window as any).mpa = map;
  (window as any).layer = layer;
}

init();
