import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./kit.css";
import {
  Bebas_Neue,
  Bodoni_Moda,
  Cardo,
  Cinzel,
  Cormorant_Garamond,
  DM_Serif_Display,
  Fraunces,
  Instrument_Serif,
  Jost,
  Libre_Baskerville,
  Libre_Franklin,
  Oswald,
  Pinyon_Script,
  Playfair_Display,
  Spectral,
  Syne,
  Yeseva_One,
  Lora,
  Manrope,
  Abril_Fatface,
  Karla,
  Space_Grotesk,
  Italiana,
  EB_Garamond,
  Montserrat,
  Anton,
  Merriweather,
  Barlow_Condensed,
  Prata,
  Crimson_Pro,
  Raleway,
  Unbounded,
  IBM_Plex_Serif,
  IBM_Plex_Mono,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Work_Sans,
} from "next/font/google";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dmserif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const franklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/* Geometric grotesque for cover furniture, labels, and folios. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/* Engraved script for section words — Editorial, Credits, Subscription. */
const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

/* November issues. preload: false — each issue only pulls the faces it sets. */
const yeseva = Yeseva_One({
  variable: "--font-yeseva",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
});

const abril = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spacegrotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: false,
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  preload: false,
});

const barlowCond = Barlow_Condensed({
  variable: "--font-barlowcond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: false,
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: false,
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: false,
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plexserif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plexmono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  preload: false,
});

const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslondisplay",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const caslonText = Libre_Caslon_Text({
  variable: "--font-caslontext",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
