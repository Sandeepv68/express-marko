/**
 * Lasso loader configuration
 */
const lassoConfig = {
    plugins: [
        'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
    ],
    outputDir: 'static', // Place all generated JS/CSS/etc. files into the "static" dir
    bundlingEnabled: false, // Only enable bundling in production
    minify: false, // Only minify JS and CSS code in production
    fingerprintsEnabled: false, // Only add fingerprints to URLs in production
    noConflict: 'Express Marko',
    require: {
        transforms: [
            {
                transform: 'lasso-babel-transform'
            }
        ]
    }
};
module.exports = lassoConfig;