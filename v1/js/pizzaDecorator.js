/**
 * @module pizzaDecorator
 * @returns {Function}
 */
(function (global) {
    'use strict';

    /**
     * @param {String} type
     * @param {String} size
     * @param {Number} quantity
     * @param {Object} cfg
     * @returns {Object}

     * @summary decorate Pizza class
     * @example pizzaDecorator('AFRODITA', 'big', {...})
     */
    global.pizzaDecorator = function (type, size, quantity, cfg) {
        var pizzaType, pizzaSize, instance, presets, tplName, el;

        cfg = cfg || {};
        el = cfg.el || 'pizza';
        tplName = cfg.tplName || 'pizza-tpl';
        presets = cfg.presets || global.pizzaPresets || {};

        if (!type) {
            throw new Error('You don\'t specify type!');
        }

        pizzaType = presets[type];
        pizzaSize = pizzaType.size[size || 'standard'];

        function getDiscount() {
            /* AC: some logic about discount */
            return 35;
        }

        instance = new global.Pizza(pizzaSize.price, quantity, getDiscount());

        function render() {
            instance.constructor.prototype.render(el, tplName, {
                titleName: global.i18n.pizza,
                titleSize: global.i18n.size,
                titleWeight: global.i18n.weight,
                titleQuantity: global.i18n.quantity,
                titlePrice: global.i18n.price,
                titleDiscount: global.i18n.discount,
                titleTotal: global.i18n.total,
                name: pizzaType.name,
                size: pizzaSize.name,
                weight: pizzaSize.weight + global.i18n.measure,
                quantity: instance.quantity + global.i18n.count,
                price: instance.getPrice() + global.i18n.currency,
                discount: instance.discount + '%',
                total: instance.getDiscount() + global.i18n.currency
            });
        }

        instance.render = render;

        return instance;
    };

}(window));