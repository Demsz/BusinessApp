
var data = [];
var json, jsonData, works, work, webs,web, mobile, video, games, touch, i, row, nameLabel, yearLabel, imageView, footerView, tableView; 



(function(e){
	json = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'extras/work.json');
	jsonData = JSON.parse(json.read().text);
	e = jsonData;
	var webs = jsonData.webs;
	Ti.API.info('E = ' + e);
	Ti.API.info('Webs = ' + webs);
	

	for(i=0; i<webs.length;i++){		
		web = webs[i];
		
		row = Ti.UI.createTableViewRow({
			className:"detail",
			filter: webs,
			webData: webs.webs,
			height: '160dp'
			});
        nameLabel = Ti.UI.createLabel({
            text:web.client,
            left:'500dp',
            top:'5dp',
            font:{
                fontSize:'2',
            	fontWeight:'bold'
        },
        height:'auto',
        left:'10dp',
        top:'5dp',
        color:'#000',
        touchEnabled:false
        });
        
        imageView = Ti.UI.createImageView({
        	image: web.imageURL,
        	height: "100dp",
        	width:"150dp",
        	left:"10dp"
        });
        
        
        yearLabel = Ti.UI.createLabel({
        	right:"50dp",
        top:'5dp',
            font:{
                fontSize:'2'
        },
        text:'"' + web.year + '"'
        });
        

 
        row.add(nameLabel);
        row.add(imageView);
        row.add(yearLabel);
        data.push(row);
	    	
	    	
        Ti.API.log('Client = ' +webs[i].client);
        
        }
		$.table.setData(data); 

})();





