module.exports = {
  reactStrictMode: true,

	// use much faster minification
	//	https://nextjs.org/docs/advanced-features/compiler#minification
  swcMinify: true,

	// optimisation for reducing deployment size...
	//	https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
	output: 'standalone',
}
