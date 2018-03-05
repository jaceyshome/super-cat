import $ from 'jquery';


/**
 * Browser helper class
 */
class Browser {

    /**
     * Get the viewing page browser name and version
     * @returns {string} - browser agent name and version e.g. MSIE 9
     */
    static getAgent() {
        var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1] === 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem !== null) {
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
        }
        M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem = ua.match(/version\/(\d+)/i))!== null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    }

    /**
     * Get browser top scroll position
     * @return {number} - browser scroll position
     */
    static getScrollTopPosition(){
        if(typeof pageYOffset !== 'undefined') {
            //most browsers except IE before #9
            return pageYOffset;
        } else {
            let B = document.body; //IE 'quirks'
            let D = document.documentElement; //IE with doctype
            D = (D.clientHeight)? D: B;
            return D.scrollTop;
        }
    }

    /**
     * Get browser left scroll position
     * @return {number} - browser scroll position
     */
    static getScrollLeftPosition(){
        return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
    }


    /**
     * Get user-agent header
     * example: User-agent header sent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36
     */
    static getUserAgent() {
        return navigator.userAgent;
    }

    static getWindowSize() {

        return {
            width:  $(window).width() ||
            window.innerWidth ||
            window.document.documentElement.clientWidth ||
            (window.document.body || window.document.getElementsByTagName('body')[0]).clientWidth,

            height: $(window).height() ||
            window.innerHeight ||
            window.document.documentElement.clientHeight ||
            (window.document.body || window.document.getElementsByTagName('body')[0]).clientHeight
        };

    }
}

export {Browser};