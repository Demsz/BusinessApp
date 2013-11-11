function doClick(evt){
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
        evt.clicksource == 'leftView') {
        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
};

function setRegion(evt) {
    if (OS_IOS) {
        $.mapview.region = {
            latitude:51.907611, longitude:4.477122,
            latitudeDelta:0.01, longitudeDelta:0.01
        };
    }
}

$.mapview.annotations = [$.mountainView];
$.mapview.region = {latitude:51.907611, longitude:4.477122, latitudeDelta:0.01, longitudeDelta:0.01};

$.container.open;
