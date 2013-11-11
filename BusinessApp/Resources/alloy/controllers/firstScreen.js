function Controller() {
    function doClickAboutUs() {
        var ctrl = Alloy.createController("info");
        Alloy.Globals.globalOpenView(ctrl.getView());
    }
    function doClickWork() {
        var ctrl = Alloy.createController("work");
        Alloy.Globals.globalOpenView(ctrl.getView());
    }
    function doClickCall() {
        var ctrl = Alloy.createController("contact");
        Alloy.Globals.globalOpenView(ctrl.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "firstScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.firstScreens = Ti.UI.createWindow({
        backgroundColor: "white",
        fullscreen: false,
        navBarHidden: false,
        barImage: "/images/bg-splash-00.png",
        orientationModes: [ Ti.UI.PORTRAIT ],
        width: Ti.UI.FULL,
        height: Ti.UI.SIZE,
        id: "firstScreens"
    });
    $.__views.firstScreens && $.addTopLevelView($.__views.firstScreens);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView"
    });
    $.__views.firstScreens.add($.__views.containerView);
    $.__views.headerView = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: "20%",
        id: "headerView"
    });
    $.__views.containerView.add($.__views.headerView);
    $.__views.buttonView = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "60%",
        top: 50,
        id: "buttonView"
    });
    $.__views.containerView.add($.__views.buttonView);
    $.__views.__alloyId2 = Ti.UI.createButton({
        width: 275,
        height: 50,
        borderRadius: 5,
        backgroundImage: "/images/btn-call.png",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 50,
        title: "About Us",
        id: "__alloyId2"
    });
    $.__views.buttonView.add($.__views.__alloyId2);
    doClickAboutUs ? $.__views.__alloyId2.addEventListener("click", doClickAboutUs) : __defers["$.__views.__alloyId2!click!doClickAboutUs"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        width: 275,
        height: 50,
        borderRadius: 5,
        backgroundImage: "/images/btn-call.png",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 120,
        title: "Work",
        id: "__alloyId3"
    });
    $.__views.buttonView.add($.__views.__alloyId3);
    doClickWork ? $.__views.__alloyId3.addEventListener("click", doClickWork) : __defers["$.__views.__alloyId3!click!doClickWork"] = true;
    $.__views.__alloyId4 = Ti.UI.createButton({
        width: 275,
        height: 50,
        borderRadius: 5,
        backgroundImage: "/images/btn-call.png",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 190,
        title: "Contact",
        id: "__alloyId4"
    });
    $.__views.buttonView.add($.__views.__alloyId4);
    doClickCall ? $.__views.__alloyId4.addEventListener("click", doClickCall) : __defers["$.__views.__alloyId4!click!doClickCall"] = true;
    $.__views.footerView = Ti.UI.createImageView({
        image: "/images/bg-splash-00.png",
        bottom: 0,
        width: 480,
        height: "10%",
        id: "footerView"
    });
    $.__views.containerView.add($.__views.footerView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!doClickAboutUs"] && $.__views.__alloyId2.addEventListener("click", doClickAboutUs);
    __defers["$.__views.__alloyId3!click!doClickWork"] && $.__views.__alloyId3.addEventListener("click", doClickWork);
    __defers["$.__views.__alloyId4!click!doClickCall"] && $.__views.__alloyId4.addEventListener("click", doClickCall);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;