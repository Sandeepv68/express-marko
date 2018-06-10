/**
 * The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
 */

/**
 * Helper function to enhance the response object
 */
function enhanceRes(req, res, next) {
    /**
     * Helper function to render Template
     */
    function renderTemplate(template, data) {
        let PATH = '../views/';
        data = data || {};
        try {
            let tmpl = require(PATH + template);
            res.marko(tmpl, data);
        } catch (e) {
            throw new Error(e);
        }
    }
    res.render = renderTemplate;
    next();
}
module.exports = enhanceRes