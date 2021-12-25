/** @type {import('next').NextConfig} */
require("dotenv").config({ path: "./.env" });

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bwa-ggstore.herokuapp.com"],
  },
};
