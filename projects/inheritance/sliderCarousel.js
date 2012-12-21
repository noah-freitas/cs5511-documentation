var presentationPrototype = {
    size: function () {
        return this.items.length;
    }
};

var presentation = function () {
    var items = [],
        presentationPropertyObject = {
            items: {
                configurable: false,
                enumerable: true,
                get: function () {
                    return items;
                }
            }
        };
    
    return Object.create(presentationPrototype, presentationPropertyObject);
};

var slideShowPrototype = presentation();
slideShowPrototype.play = function () {
    // do play stuff.
};

var slideShow = function () {
    var captions [],
        slideShowPropertyObject = {
            captions: {
                configurable: false,
                enumerable: true,
                get: function () {
                    return captions;
                }
            }
        };

    return Object.create(slideShowPrototype, slideShowPropertyObject);
};
