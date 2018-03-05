import htmlTruncate from 'html-truncate';
import $ from 'jquery';

/**
 * Strings Class
 */
class Strings {
    /**
     * Generate a random string, default is the maximum 12 characters. The toString method of a number type
     * in javascript takes an optional parameter to convert the number into a given base. Similar to hex
     * (base 16), base 36 uses letters to represent digits beyond 9.
     * @see http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
     * @param {number} length - The length of the random string
     * @returns {string} - The random string , default is 12 length
     */
    static random(length) {
        return Math.random().toString(36).substr(2, ( length && length <=12 ) ? length : 12);
    }

    /**
     * A more sophisticated solution/library for shortening strings
     * @see http://stackoverflow.com/questions/1199352/smart-way-to-shorten-long-strings-with-javascript
     * @param str {string} - candidate content
     * @param n {number} - length of the string
     * @param useWordBoundary {boolean} - default true for using word boundary, else false
     * @returns {*}
     */
    static truncate( str, n, useWordBoundary ) {
        useWordBoundary = useWordBoundary || true;
        var isTooLong = str.length > n,
            s_ = isTooLong ? str.substr(0,n-1) : str;
        s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
        return  isTooLong ? s_ + '...' : s_;
    }

    /**
     * Truncated html content
     * @param $el
     * @param candidateStr {string} - input string
     * @param maxLength {number} - maximum character length
     * @param maxHeight {number} - maxHeight of the content, default is 64
     * @param ellipsis  {string} - ellipsis, default is '...'
     * @returns {string} - truncate string
     */
    static truncateHtmlContent( $el, candidateStr ,maxLength, maxHeight, ellipsis) {
        maxLength = maxLength || 250;
        maxHeight = maxHeight || 64;
        ellipsis = ellipsis || '...';
        const tagLength = 10;
        var truncatedString = htmlTruncate(candidateStr, maxLength, { ellipsis: ellipsis });
        //TODO comments for the logic
        if ($el.html(truncatedString).height() % maxHeight > 0 ) {
            return htmlTruncate(truncatedString, truncatedString.length / ( ( $el.html(truncatedString).height() / maxHeight ) * 2 ), { ellipsis: ellipsis});
        }
        var filterString = this.removeEmptyHtmlTags(truncatedString, ellipsis);
        if( filterString !== truncatedString) {
            return htmlTruncate(truncatedString, filterString.length - tagLength, { ellipsis: ellipsis});
        }
        return truncatedString;
    }

    static trimEmptyTags($el) {
        $el.each(function () {
            if ('' === $.trim($(this).text())) {
                $(this).remove();
            }
        });
        return $el;
    }


    /**
     * Remove empty tags
     */
    static removeEmptyHtmlTags(str, includedStr) {
        return str.replace(includedStr, '').replace(/(<(?!\/)[^>]+>)+(<\/[^>]+>)/gm, '');
    }

    /**
     * clean html
     * @param html
     * @returns {string|string}
     */
    static strip(html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    /**
     * remove line breaks, and br tags
     * @param str
     * @returns {*}
     */
    static removeLineBreaks(str){
        return str.replace(/\r?\n|\r|&lt;br&gt;|<br>|<br\/>/g, '');
    }

    /**
     * Get audio/video time string from seconds
     * @param secs {Number} - seconds 
     * @returns {string} - time string
     * @example 100 seconds - 1 min 40 sec
     */
    static getMediaTimeStringFromSeconds(secs=0) {
        var seconds = parseInt(secs);
        var hours = Math.floor(secs / (60 * 60));
        seconds = seconds - (hours * (60 * 60));
        var minutes = Math.floor(seconds / 60);
        seconds = seconds - (minutes * 60);

        var timeString = "";
        if(hours > 0) {
            timeString = timeString + hours + ' hour ';
        }
        if(minutes > 0) {
            timeString = timeString + minutes + ' min ';
        }
        timeString = timeString + seconds + ' sec';

        return timeString;
    }

}

export {Strings};