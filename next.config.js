/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };
    return config;
  },
  images: {
    domains: ["cdn.pixabay.com", "localhost"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/callback", //들어오는 요청 경로 패턴
        destination: "/kakao", //라우팅하려는 경로
        permanent: false, // 브라우저나 검색엔진이 이 정보를 기억하는지 여부 결정
      },
    ];
  },
  swcMinify: true,
};
