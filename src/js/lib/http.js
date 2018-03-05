import $ from 'jquery';
import _ from 'lodash';
import Promise from 'bluebird';

class Http {

    /**
     * @param url {string}  - request url
     * @param data {object} - data to send to server
     * @param cb {function} - callback function
     * @param type {string} - default 'json', 'jsonp', 'html'
     */
    static get(url, {type = 'json', data, cb} = {}) {
        return new Promise(function(resolve, reject, onCancel) {
            // Get the content from the server
            return $.ajax(url, {
                method: 'get',
                data: data,
                dataType: type,
                contentType: type
            }).done((data) => {
                if(typeof cb === 'function') {
                    cb(data);
                }
                return resolve(data);
            }).fail((jqXHR, textStatus, errorThrown) => {
                return reject(console.error(errorThrown));
            }).always(resolve);

        });
    }

    /**
     * Performs an AJAX request to get JSON data from the specified URL & method
     * @param url {string}  - request url
     * @param data {object} - data to send to server
     * @param cb {function} - callback function
     * @param type {string} - default json
     */
    static post(url, {type = 'json', data, cb}) {
        return new Promise((resolve, reject, onCancel) => {
            type = type || 'json';
            // Get the content from the server
            $.ajax(url, {
                method: 'post',
                data: data,
                dataType: type,
                contentType: type
            }).then((data) => {
                resolve(data);
                if(typeof cb === 'function') {
                    cb(data);
                }
            }, (jqXHR, textStatus, errorThrown) => {
                reject(new Error(errorThrown));
            });

        });
    }

    static list() {}

    static put() {}
    
}

export { Http };
