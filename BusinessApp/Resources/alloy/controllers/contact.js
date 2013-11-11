function Controller() {
    function doClick(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
        ("leftButton" == evt.clicksource || "leftPane" == evt.clicksource || "leftView" == evt.clicksource) && Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
    function setRegion() {
        $.mapview.region = {
            latitude: 51.907611,
            longitude: 4.477122,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        fullscreen: false,
        navBarHidden: false,
        barImage: "/images/bg-splash-00.png",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "container",
        title: "Contact"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView"
    });
    $.__views.container.add($.__views.containerView);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        top: 0,
        bottom: 26,
        contentHeight: "auto",
        id: "__alloyId0"
    });
    $.__views.containerView.add($.__views.__alloyId0);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView"
    });
    $.__views.__alloyId0.add($.__views.contentView);
    $.__views.adress = Ti.UI.createLabel({
        color: "#000",
        bottom: 30,
        left: "20dp",
        width: Ti.UI.SIZE,
        height: "30%",
        id: "adress",
        text: "Address: Calandstraat 5A, 3016 CA Rotterdam"
    });
    $.__views.contentView.add($.__views.adress);
    $.__views.phone = Ti.UI.createLabel({
        color: "#000",
        bottom: 10,
        left: "20dp",
        width: Ti.UI.SIZE,
        height: "20%",
        id: "phone",
        text: "Phone:010 440 0960"
    });
    $.__views.contentView.add($.__views.phone);
    var __alloyId1 = [];
    $.__views.mountainView = Ti.Map.createAnnotation({
        latitude: 51.907611,
        longitude: 4.477122,
        id: "mountainView",
        title: "Appcelerator Headquarters",
        subtitle: "Calandstraat",
        pincolor: Titanium.Map.ANNOTATION_RED,
        leftButton: "/images/appcelerator_small.png",
        myid: "1"
    });
    __alloyId1.push($.__views.mountainView);
    $.__views.mapview = Ti.Map.createView({
        top: 10,
        width: "300dp",
        height: "250dp",
        annotations: __alloyId1,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId0.add($.__views.mapview);
    doClick ? $.__views.mapview.addEventListener("click", doClick) : __defers["$.__views.mapview!click!doClick"] = true;
    setRegion ? $.__views.mapview.addEventListener("complete", setRegion) : __defers["$.__views.mapview!complete!setRegion"] = true;
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
    $.mapview.annotations = [ $.mountainView ];
    $.mapview.region = {
        latitude: 51.907611,
        longitude: 4.477122,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.container.open;
    __defers["$.__views.mapview!click!doClick"] && $.__views.mapview.addEventListener("click", doClick);
    __defers["$.__views.mapview!complete!setRegion"] && $.__views.mapview.addEventListener("complete", setRegion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;