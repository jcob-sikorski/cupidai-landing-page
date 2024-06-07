const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        pathname: "/**", // Adjusted pathname to match the provided URL pattern
      },
    ],
  },
};

export default nextConfig;
