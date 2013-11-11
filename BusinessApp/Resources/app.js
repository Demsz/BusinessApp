var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.globalOpenView = function(view) {
    Alloy.Globals.navGroup.open(view);
    Alloy.Globals.navGroup.navBarHidden = false;
};

Alloy.createController("index");