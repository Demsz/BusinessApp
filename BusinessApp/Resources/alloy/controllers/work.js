function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "work";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win0 = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        fullscreen: false,
        navBarHidden: false,
        barImage: "/images/bg-splash-00.png",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win0",
        title: "Work"
    });
    $.__views.win0 && $.addTopLevelView($.__views.win0);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView"
    });
    $.__views.win0.add($.__views.containerView);
    $.__views.__alloyId11 = Ti.UI.createScrollView({
        top: 0,
        bottom: 26,
        contentHeight: "auto",
        id: "__alloyId11"
    });
    $.__views.containerView.add($.__views.__alloyId11);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.__alloyId11.add($.__views.table);
    $.__views.footerView = Ti.UI.createImageView({
        image: "/images/bg-splash-00.png",
        bottom: 0,
        width: 480,
        height: "10%",
        id: "footerView"
    });
    $.__views.win0.add($.__views.footerView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var json, jsonData, web, i, row, nameLabel, yearLabel, imageView;
    (function(e) {
        json = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "extras/work.json");
        jsonData = JSON.parse(json.read().text);
        e = jsonData;
        var webs = jsonData.webs;
        Ti.API.info("E = " + e);
        Ti.API.info("Webs = " + webs);
        for (i = 0; webs.length > i; i++) {
            web = webs[i];
            row = Ti.UI.createTableViewRow({
                className: "detail",
                filter: webs,
                webData: webs.webs,
                height: "160dp"
            });
            nameLabel = Ti.UI.createLabel({
                text: web.client,
                left: "500dp",
                top: "5dp",
                font: {
                    fontSize: "2",
                    fontWeight: "bold"
                },
                height: "auto",
                left: "10dp",
                top: "5dp",
                color: "#000",
                touchEnabled: false
            });
            imageView = Ti.UI.createImageView({
                image: web.imageURL,
                height: "100dp",
                width: "150dp",
                left: "10dp"
            });
            yearLabel = Ti.UI.createLabel({
                right: "50dp",
                top: "5dp",
                font: {
                    fontSize: "2"
                },
                text: '"' + web.year + '"'
            });
            row.add(nameLabel);
            row.add(imageView);
            row.add(yearLabel);
            data.push(row);
            Ti.API.log("Client = " + webs[i].client);
        }
        $.table.setData(data);
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;