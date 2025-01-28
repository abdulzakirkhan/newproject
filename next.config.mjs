/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,  // Minification for production builds
  
    // Additional configurations you might want for CSS
    webpack(config, { dev, isServer }) {
      // Tailwind's JIT mode should work automatically, but here is some custom webpack config you might use
      if (!dev && !isServer) {
        // If you are using a custom configuration, ensure your build isn't removing necessary styles.
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
          },
        };
      }
      return config;
    },
  
    // This ensures the tailwind.css is included correctly in your app in production.
    cssModules: true,
  };
  
  export default nextConfig;
  