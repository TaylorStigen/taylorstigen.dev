import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import terser from "lume/plugins/terser.ts";
import svgo from "lume/plugins/svgo.ts";
import simpleIcons from "./lume_icon_plugins/simpleicons.ts";

const site = lume();

site.ignore("README.md");
site.data("currentDate", new Date().getFullYear());
site.use(sass());
site.use(terser());
site.use(svgo());
site.copy([".webp", ".png", ".ico", ".webmanifest"]);
site.use(simpleIcons());

export default site;
