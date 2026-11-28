import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./kit.css";

const cinzel = localFont({
  variable: "--font-cinzel",
  src: [
    { path: "../fonts/g/cinzel-500-700.woff2", weight: "500 700", style: "normal" },
  ],
  display: "swap",
});

const baskerville = localFont({
  variable: "--font-baskerville",
  src: [
    { path: "../fonts/g/libre-baskerville-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/libre-baskerville-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const fraunces = localFont({
  variable: "--font-fraunces",
  src: [
    { path: "../fonts/g/fraunces-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/fraunces-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const cardo = localFont({
  variable: "--font-cardo",
  src: [
    { path: "../fonts/g/cardo-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/cardo-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/g/cardo-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const oswald = localFont({
  variable: "--font-oswald",
  src: [
    { path: "../fonts/g/oswald-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const cormorant = localFont({
  variable: "--font-cormorant",
  src: [
    { path: "../fonts/g/cormorant-garamond-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/cormorant-garamond-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const playfair = localFont({
  variable: "--font-playfair",
  src: [
    { path: "../fonts/g/playfair-display-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/playfair-display-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const bodoni = localFont({
  variable: "--font-bodoni",
  src: [
    { path: "../fonts/g/bodoni-moda-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/bodoni-moda-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const bebas = localFont({
  variable: "--font-bebas",
  src: [
    { path: "../fonts/g/bebas-neue-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
});

const spectral = localFont({
  variable: "--font-spectral",
  src: [
    { path: "../fonts/g/spectral-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/spectral-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/g/spectral-600-italic.woff2", weight: "600", style: "italic" },
    { path: "../fonts/g/spectral-700-italic.woff2", weight: "700", style: "italic" },
    { path: "../fonts/g/spectral-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/g/spectral-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/g/spectral-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/g/spectral-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const instrument = localFont({
  variable: "--font-instrument",
  src: [
    { path: "../fonts/g/instrument-serif-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/instrument-serif-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
});

const dmSerif = localFont({
  variable: "--font-dmserif",
  src: [
    { path: "../fonts/g/dm-serif-display-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/dm-serif-display-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
});

const franklin = localFont({
  variable: "--font-franklin",
  src: [
    { path: "../fonts/g/libre-franklin-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const syne = localFont({
  variable: "--font-syne",
  src: [
    { path: "../fonts/g/syne-500-700.woff2", weight: "500 700", style: "normal" },
  ],
  display: "swap",
});

/* Geometric grotesque for cover furniture, labels, and folios. */
const jost = localFont({
  variable: "--font-jost",
  src: [
    { path: "../fonts/g/jost-300-700-italic.woff2", weight: "300 700", style: "italic" },
    { path: "../fonts/g/jost-300-700.woff2", weight: "300 700", style: "normal" },
  ],
  display: "swap",
});

/* Engraved script for section words — Editorial, Credits, Subscription. */
const pinyon = localFont({
  variable: "--font-pinyon",
  src: [
    { path: "../fonts/g/pinyon-script-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
});

/* November issues. preload: false — each issue only pulls the faces it sets. */
const yeseva = localFont({
  variable: "--font-yeseva",
  src: [
    { path: "../fonts/g/yeseva-one-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const lora = localFont({
  variable: "--font-lora",
  src: [
    { path: "../fonts/g/lora-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/lora-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const manrope = localFont({
  variable: "--font-manrope",
  src: [
    { path: "../fonts/g/manrope-400-800.woff2", weight: "400 800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const abril = localFont({
  variable: "--font-abril",
  src: [
    { path: "../fonts/g/abril-fatface-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const karla = localFont({
  variable: "--font-karla",
  src: [
    { path: "../fonts/g/karla-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/karla-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const spaceGrotesk = localFont({
  variable: "--font-spacegrotesk",
  src: [
    { path: "../fonts/g/space-grotesk-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const italiana = localFont({
  variable: "--font-italiana",
  src: [
    { path: "../fonts/g/italiana-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const garamond = localFont({
  variable: "--font-garamond",
  src: [
    { path: "../fonts/g/eb-garamond-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "../fonts/g/eb-garamond-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const montserrat = localFont({
  variable: "--font-montserrat",
  src: [
    { path: "../fonts/g/montserrat-300-800-italic.woff2", weight: "300 800", style: "italic" },
    { path: "../fonts/g/montserrat-300-800.woff2", weight: "300 800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const anton = localFont({
  variable: "--font-anton",
  src: [
    { path: "../fonts/g/anton-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const merriweather = localFont({
  variable: "--font-merriweather",
  src: [
    { path: "../fonts/g/merriweather-300-900-italic.woff2", weight: "300 900", style: "italic" },
    { path: "../fonts/g/merriweather-300-900.woff2", weight: "300 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const barlowCond = localFont({
  variable: "--font-barlowcond",
  src: [
    { path: "../fonts/g/barlow-condensed-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/barlow-condensed-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/g/barlow-condensed-600-italic.woff2", weight: "600", style: "italic" },
    { path: "../fonts/g/barlow-condensed-700-italic.woff2", weight: "700", style: "italic" },
    { path: "../fonts/g/barlow-condensed-800-italic.woff2", weight: "800", style: "italic" },
    { path: "../fonts/g/barlow-condensed-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/g/barlow-condensed-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/g/barlow-condensed-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/g/barlow-condensed-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/g/barlow-condensed-800.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const prata = localFont({
  variable: "--font-prata",
  src: [
    { path: "../fonts/g/prata-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const crimson = localFont({
  variable: "--font-crimson",
  src: [
    { path: "../fonts/g/crimson-pro-300-700-italic.woff2", weight: "300 700", style: "italic" },
    { path: "../fonts/g/crimson-pro-300-700.woff2", weight: "300 700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const raleway = localFont({
  variable: "--font-raleway",
  src: [
    { path: "../fonts/g/raleway-300-800-italic.woff2", weight: "300 800", style: "italic" },
    { path: "../fonts/g/raleway-300-800.woff2", weight: "300 800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const unbounded = localFont({
  variable: "--font-unbounded",
  src: [
    { path: "../fonts/g/unbounded-300-800.woff2", weight: "300 800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const plexSerif = localFont({
  variable: "--font-plexserif",
  src: [
    { path: "../fonts/g/ibm-plex-serif-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../fonts/g/ibm-plex-serif-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/ibm-plex-serif-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/g/ibm-plex-serif-600-italic.woff2", weight: "600", style: "italic" },
    { path: "../fonts/g/ibm-plex-serif-700-italic.woff2", weight: "700", style: "italic" },
    { path: "../fonts/g/ibm-plex-serif-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/g/ibm-plex-serif-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/g/ibm-plex-serif-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/g/ibm-plex-serif-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/g/ibm-plex-serif-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const plexMono = localFont({
  variable: "--font-plexmono",
  src: [
    { path: "../fonts/g/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/g/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/g/ibm-plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const caslonDisplay = localFont({
  variable: "--font-caslondisplay",
  src: [
    { path: "../fonts/g/libre-caslon-display-400.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const caslonText = localFont({
  variable: "--font-caslontext",
  src: [
    { path: "../fonts/g/libre-caslon-text-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/g/libre-caslon-text-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/g/libre-caslon-text-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

const workSans = localFont({
  variable: "--font-worksans",
  src: [
    { path: "../fonts/g/work-sans-300-800-italic.woff2", weight: "300 800", style: "italic" },
    { path: "../fonts/g/work-sans-300-800.woff2", weight: "300 800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

/* Hand for signatures. Self-hosted so the build does not fetch Caveat from Google. */
const caveat = localFont({
  src: "./fonts/Caveat-latin.woff2",
  variable: "--font-caveat",
  weight: "400 700",
  display: "swap",
});

const fontVars = [
  cinzel.variable,
  baskerville.variable,
  fraunces.variable,
  cardo.variable,
  oswald.variable,
  cormorant.variable,
  playfair.variable,
  bodoni.variable,
  bebas.variable,
  spectral.variable,
  instrument.variable,
  dmSerif.variable,
  franklin.variable,
  syne.variable,
  jost.variable,
  pinyon.variable,
  caveat.variable,
  yeseva.variable,
  lora.variable,
  manrope.variable,
  abril.variable,
  karla.variable,
  spaceGrotesk.variable,
  italiana.variable,
  garamond.variable,
  montserrat.variable,
  anton.variable,
  merriweather.variable,
  barlowCond.variable,
  prata.variable,
  crimson.variable,
  raleway.variable,
  unbounded.variable,
  plexSerif.variable,
  plexMono.variable,
  caslonDisplay.variable,
  caslonText.variable,
  workSans.variable,
].join(" ");

export default function MagazineLayout({ children }: { children: ReactNode }) {
  return <div className={fontVars}>{children}</div>;
}
