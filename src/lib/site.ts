/**
 * The handful of facts that appear in more than one place.
 *
 * PLAY_URL and PACKAGE are the two that must never drift from the app: the
 * package name is permanent once published, and it is what the invite page's
 * fallback link is built from.
 */
export const PACKAGE = 'com.simpletoolslabs.evenpay';
export const PLAY_URL = `https://play.google.com/store/apps/details?id=${PACKAGE}`;
export const SITE_URL = 'https://evenpay.co.in';
export const CONTACT = 'sidanaarjun7@gmail.com';

/**
 * Pocket Scanner, the other app whose pages live under `/pocket-scanner`. Its
 * privacy policy is still the one on GitHub Pages, which its Play listing
 * points at.
 */
export const PS_PACKAGE = 'com.pocketscanner.app';
export const PS_PLAY_URL = `https://play.google.com/store/apps/details?id=${PS_PACKAGE}`;
export const PS_PRIVACY_URL = 'https://arjunsid07.github.io/privacy.html';
