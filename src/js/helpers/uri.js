/**
* Urls Class
*/
class URI {

    /**
     * Get url params
     * @example
     * //navigation-page.html?category=administration&topic=personal-administration
     * //return params will be:
     * {
     *      category: "administration",
     *      topic: "personal-administration"
     * }
     *
     * @return {object} params - Url params
     */
    static getParams() {
        let params = {};
        window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
            params[$1] = $3;
        });
        return params;
    }

    /**
     * Set url params to url
     * @param {string} params - url parameters, e.g. "category=administration&topic=honnours"
     * @example
     *      Helpers.URI.setUriParams($.param( { category: "admin", topic: "honnours" }) ),
     *      //uri will have category=admin&topic=honnours
     *      //$.param will convert object to mapping string
     * @private
     */
    static setUriParams(params) {
        var newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${params ? '?'+ params : '' }`;
        window.history.pushState({path:newurl},'',newurl);
    }

}

export {URI};