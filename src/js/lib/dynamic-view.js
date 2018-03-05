import $ from 'jquery';
import {Helpers} from '../helpers/helpers';
import idom from 'incremental-dom';


/**
 * Dynamic view component is using
 */
export class DynamicView {

    /**
     * Create a incremental dom view
     */
    constructor(options={templateFn, $container, vm, id}) {
        if ( Object.is(options, undefined) ) {
            throw new Error('options params is not provided');
        }
        if ( Object.is(options.templateFn, undefined) ) {
            throw new Error('to initialise a view template function is necessary ');
        }
        if ( Object.is(options.$container, undefined) ) {
            throw new Error('to initialise a container to mount template on is necessary ');
        }

        //------------- private objects -----------
        this._id = options.id ? `${options.id}-view` : `${Helpers.Strings.random(8)}-view`;
        this._el = document.createElement('div');
        Helpers.Element.addProperty(this._id, this._el);

        this._$container = options.$container;
        this._templateFn = options.templateFn;
        this._vm = options.vm;

        //-------------- init -----------------------
        this.render();
        $(this._$container).append(this._el);
    }


    /*------------------------ Public methods ----------------------*/
    render() {
        idom.patch(this._el, this._templateFn, this._vm);
    }

    destroy() {
        $(this._el).empty();
        $(this._$container).empty();
        for (const prop in this) {
            if(this.hasOwnProperty(prop)){
                delete this[prop];
            }
        }
    }

}
