/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './loader.js',  // Ensure this points to the correct loader file
    },
  };
  
  export default nextConfig;
  