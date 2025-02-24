import lume from "lume/mod.ts";
import terser from "lume/plugins/terser.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume();

site.ignore("README.md");
site.data("currentDate", new Date().getFullYear());
site.use(terser());
site.use(svgo());
site.copy([".webp", ".png", ".ico", ".webmanifest", ".css", ".jpg", ".eot", ".ttf", ".woff", ".woff2"]);

export default site;
