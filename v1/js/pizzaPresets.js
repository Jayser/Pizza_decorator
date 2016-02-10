(function (global) {
    'use strict';

    global.pizzaPresets = {
        AFRODITA: {
            name: global.i18n.pizzaNames.afrodita,
            size: {
                standard: {
                    name: global.i18n.standard,
                    price: 69,
                    weight: 300
                },
                big: {
                    name: global.i18n.big,
                    price: 115,
                    weight: 470
                }
            }
        }
    };
}(window));
