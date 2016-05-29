(function (){
  'use strict';
  var supports = !!document.querySelector && !!root.addEventListener;

  if(supports) return;

  this.pickydate = function () {

    var defaults = {
      format: 'YYYY-MM-DD',
      monthNames: ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"],
      startDate: "",
      endDate: "",
      currentDate: "",
      allowManualInput: false,
    };

    if(arguments[0] && typeof arguments[0] === "object"){
      this.options = extendDefaults(defaults, arguments[0]);
    }

    //extends defaults with passed in options
    function extendDefaults (source, properties){
      var property;
      for(property in properties){
        if(properties.hasOwnProperty(property)){
          source[property] = properties[property];
        }
      }
      return source;
    }

    //public methods
    pickydate.prototype.open = function () {

    };

    //events


  };
}());
