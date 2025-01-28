/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,  // Minification for production builds
  
    // Additional configurations you might want for CSS
    webpack(config, { dev, isServer }) {
      // Ensure CSS files are included in production builds
      if (!dev && !isServer) {
        // Ensure styles (CSS) are bundled separately in production
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,  // Ensure CSS/SCSS files are included
            chunks: 'all',  // Ensure styles are applied to all chunks
            enforce: true,
          },
        };
      }
      return config;
    },
  
    // Enable CSS Modules
    cssModules: true,  // This allows you to use CSS Modules for scoped styles
  
    // This ensures that tailwind.css is included correctly in your app in production
    webpack(config, { dev, isServer }) {
      if (!dev && !isServer) {
        config.module.rules.push({
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        });
      }
      return config;
    },
  };
  
  export default nextConfig;
  