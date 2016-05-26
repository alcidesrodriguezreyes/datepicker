(function (){
  'use strict';
  this.datepicker = function () {

    var defaults = {
      format: 'YYYY-MM-DD',
      monthNames: ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]
    };

    if(arguments[0] && typeof arguments[0] === "object"){
      this.options = extendDefaults(defaults, arguments[0]);
    }

    function extendDefaults (source, properties){
      var property;
      for(property in properties){
        if(properties.hasOwnProperty(property)){
          source[property] = properties[property];
        }
      }
      return source;
    }

  };
}());
