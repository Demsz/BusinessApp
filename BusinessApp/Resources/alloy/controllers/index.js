function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        fullscreen: false,
        navBarHidden: false,
        barImage: "/images/bg-splash-00.png",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId6 = Alloy.createController("firstScreen", {
        id: "__alloyId6"
    });
    $.__views.navGroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId6.getViewEx({
            recurse: true
        }),
        id: "navGroup"
    });
    $.__views.index.add($.__views.navGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navGroup = $.navGroup;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;