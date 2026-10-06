import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * `/join/` and `/join` must both land on the invite page.
   *
   * The app's intent filter is pathPrefix "/join", which matches either, so an
   * invite opened on a phone with Even Pay installed never touches this. But a
   * link pasted with or without the slash has to reach the same page in a
   * browser, and a 308 between the two is a redirect the old published URL did
   * not have. Trailing slashes everywhere is the shape the previous static site
   * served, so it keeps existing links byte-identical.
   */
  trailingSlash: true,

  async headers() {
    return [
      {
        /**
         * Read by Android's App Link verifier, not by a browser, and read at
         * install time — so a stale cached copy is a link that silently stops
         * opening the app for everyone who installs during the TTL. Five
         * minutes is short enough to fix a mistake quickly and long enough to
         * be cached at the edge.
         *
         * The content type is set explicitly because it is the one thing here
         * that fails invisibly: served as anything but JSON, verification is
         * refused and the link quietly opens a browser instead.
         */
        source: '/.well-known/assetlinks.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Cache-Control', value: 'public, max-age=300' },
        ],
      },
    ];
  },
};

export default nextConfig;
