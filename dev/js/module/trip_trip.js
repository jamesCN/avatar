
/*************************************************

Version:
Create: 06-01-06
Update: 
Description: 履历-历程
Reference: 
Author: James.Yu

*************************************************/

function Trip(options) {
        
    $.extend(this, options);    
    this.initialize();
    return this;
    
};

Trip.prototype = {

    url: "mock/trip-trip.json",
    container: "#trip",
    tmpl: "tplTripTrip",

    initialize: function() {        
        this.container = $(this.container);
    },

    display: function() {

        var that = this;

        $.ajax({url: this.url})
        .done(function(data, textStatus, jqXHR) {

            if(data.code!=0) return false;

            var dataObject = {
                trips: data.data
            };

            var dataHTML = tmpl(that.tmpl, dataObject);
            that.container.html(dataHTML);

        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    }
}
