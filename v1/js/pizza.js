/**
 * @module Pizza
 * @param {Object} window
 * @returns {Object} Class Pizza
 */
(function (global) {
    'use strict';

    /**
     * @Class Pizza
     * @param {Number} price
     * @param {String} quantity
     * @param {String} discount
     */
    function Pizza(price, quantity, discount) {
        this.price = price || 0;
        this.quantity = quantity || 1;
        this.discount = discount || 0;
    }

    /**
     * @method getPrice
     * @returns {Number} Price
     */
    Pizza.prototype.getPrice = function () {
        return this.price * this.quantity;
    };

    /**
     * @method getDiscount
     * @returns {Number} discount
     */
    Pizza.prototype.getDiscount = function () {
        return (this.price * this.quantity) * (100 - this.discount) / 100;
    };

    /**
     * @method getTemplate
     * @returns {String} Html
     */
    Pizza.prototype.getTemplate = function (tplName) {
        return global.document.getElementById(tplName).innerHTML;
    };

    /**
     * @method render
     */
    Pizza.prototype.render = function (el ,tplName, data) {
        global.document.getElementById(el).innerHTML = this.getTemplate(tplName).replace(/{{([a-zA-Z]+)}}/g, function (key, name) {
            return data[name];
        });
    };

    global.Pizza = Pizza;

}(window));