module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['sk99foto.s3.eu-west-3.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1140, 1920, 2048, 3840]
  },
  env: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_MYAPP,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_MYAPP,
    region: process.env.AWS_REGION_MYAPP,
    //staticImagesPath: "https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://www.99foto.pl/static/"
    staticImagesPath: "/static/"
  }
}