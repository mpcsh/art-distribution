/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	reactStrictMode: true,
	images: {
		domains: ["art-distribution.s3.amazonaws.com"],
	},
};

module.exports = nextConfig;
