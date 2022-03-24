module.exports = {
  experimental: {
    outputStandalone: true,
  },
  env: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_MYAPP,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_MYAPP,
    region: process.env.AWS_REGION_MYAPP,
    //staticImagesPath: "https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://www.99foto.pl/static/"
    staticImagesPath: "/static/"
    //staticImagesPath: "http://localhost:3000/static/"
  }
}