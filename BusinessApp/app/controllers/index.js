

if (OS_ANDROID) {
	$.firstScreen.getView().open();
} else if (OS_IOS) {
	Alloy.Globals.navGroup = $.navGroup;
	$.index.open();
}