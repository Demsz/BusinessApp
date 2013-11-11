function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        fullscreen: false,
        navBarHidden: false,
        barImage: "/images/bg-splash-00.png",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "container",
        title: "Info"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.containerView = Ti.UI.createView({
        width: "90%",
        height: "100%",
        id: "containerView"
    });
    $.__views.container.add($.__views.containerView);
    $.__views.__alloyId7 = Ti.UI.createScrollView({
        top: 0,
        bottom: 26,
        contentHeight: "auto",
        id: "__alloyId7"
    });
    $.__views.containerView.add($.__views.__alloyId7);
    $.__views.contentView = Ti.UI.createView({
        layout: "vertical",
        id: "contentView"
    });
    $.__views.__alloyId7.add($.__views.contentView);
    $.__views.sectionTitle = Ti.UI.createLabel({
        color: "#54038e",
        left: 0,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        top: 10,
        height: Ti.UI.SIZE,
        id: "sectionTitle",
        text: "dpdk Buisiness 2013"
    });
    $.__views.contentView.add($.__views.sectionTitle);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        height: Ti.UI.SIZE,
        text: "Dpdk is een creatief digitaal bureau dat concepten bedenkt, creëert en ontwikkelt.",
        id: "__alloyId8"
    });
    $.__views.contentView.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        height: Ti.UI.SIZE,
        text: "Wij stellen een goed concept en de juiste gebruikerservaring centraal in de relatie tussen onze klanten en hun consumenten.",
        id: "__alloyId9"
    });
    $.__views.contentView.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        height: Ti.UI.SIZE,
        text: "Door te luisteren, doen waar we goed in zijn en te blijven innoveren, geven we onszelf richting.",
        id: "__alloyId10"
    });
    $.__views.contentView.add($.__views.__alloyId10);
    $.__views.footerView = Ti.UI.createImageView({
        image: "/images/bg-splash-00.png",
        bottom: 0,
        width: 480,
        height: "10%",
        id: "footerView"
    });
    $.__views.container.add($.__views.footerView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;