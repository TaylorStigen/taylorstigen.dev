import lume from "lume/mod.ts";
import terser from "lume/plugins/terser.ts";
import svgo from "lume/plugins/svgo.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import purgecss from "lume/plugins/purgecss.ts";

const site = lume();

site.ignore("README.md");
site.data("currentDate", new Date().getFullYear());
site.use(terser({
  options: {
    module: false,
  },
}));
site.use(svgo());
site.copy([
  ".webp",
  ".png",
  ".ico",
  ".webmanifest",
  ".jpg",
  ".eot",
  ".ttf",
  ".woff",
  ".woff2",
]);
site.use(purgecss());
site.use(lightningCss({includes: false}));

export default site;
