
function doClickAboutUs(e) {var ctrl = Alloy.createController('info');
	Alloy.Globals.globalOpenView(ctrl.getView());
};


function doClickWork(e) {
    var ctrl = Alloy.createController('work');
	Alloy.Globals.globalOpenView(ctrl.getView());

}

function doClickCall(e) {
    var ctrl = Alloy.createController('contact');
	Alloy.Globals.globalOpenView(ctrl.getView());
}