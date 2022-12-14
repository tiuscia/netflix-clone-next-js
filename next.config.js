/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    // remotePatterns: [
    //   {
    //     // domains: ["image.themoviedb.org"],
    //     protocol: "https",
    //     hostname: "image.tmdb.org",
    //     // port: "",
    //     // pathname: "/account123/**",
    //   },
    // ],
  },
}
