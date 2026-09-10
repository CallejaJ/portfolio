/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/cv-ats",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Descubrimiento para agentes (RFC 8288): sitemap + catálogo de APIs (RFC 9727)
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</sitemap.xml>; rel="sitemap", </.well-known/api-catalog>; rel="api-catalog"',
          },
        ],
      },
      {
        source: "/.well-known/api-catalog",
        headers: [
          { key: "Content-Type", value: "application/linkset+json" },
        ],
      },
    ];
  },
}

export default nextConfig
