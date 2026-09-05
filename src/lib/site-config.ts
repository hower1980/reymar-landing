export const SITE_URL = "https://getreymar.com";
export const SITE_NAME = "Reymar";
export const APP_NAME = "Reymar";
export const APP_SUBTITLE = "Mesas de pronósticos";
export const SUPPORT_EMAIL = "soporte@getreymar.com";
export const PRIVACY_EMAIL = "privacidad@getreymar.com";
export const PROMO_DESCRIPTION =
  "Crea una mesa gratis con tus amigos, pronostica Reymar antes del corte y, si quieres, desbloquea Temporada en esa mesa. Sin apuestas ni dinero real.";
export const KEYWORDS = [
  "reymar",
  "pronosticos",
  "futbol",
  "mesa",
  "porra",
  "quiniela",
  "champions",
  "temporada",
  "pleno",
];
export const DEEP_LINK_JOIN = (code: string) =>
  `reymar://leagues/join?code=${encodeURIComponent(code)}`;
export const MESA_CODE_PATTERN = /^[A-Za-z0-9]{6}$/;
