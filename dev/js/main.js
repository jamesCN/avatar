//alert("welcome to the start of J.Y");

var config = {

	moduleMap: {
    	"index": new ModIndex(),
    	"article": new ModArticle(),
    	"detail": new ModDetail(),
    	"trip": new ModTrip(),
    	"view": new ModView()
	}	
}

var app = new AvataJS(config);


