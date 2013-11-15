Template.cube.facelet = function(faceletID){
  var facelet = Facelets.findOne(faceletID);
  if (facelet)
    return facelet.color;
  return '';
};

Template.uButton.events({
  'click input' : function () {
    Meteor.call('moveU');
  }
});

Template.uPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveUPrime');
  }
});


 //{{>uButton}}
 // {{>uPrimeButton}}<br>
 // {{>dButton}}
 // {{>dPrimeButton}}<br>
 // <br>
 // {{>fButton}}
 // {{>fPrimeButton}}<br>
 // {{>bButton}}
 // {{>bPrimeButton}}<br>
 // <br>
 // {{>lButton}}
 // {{>lPrimeButton}}<br>
 // {{>rButton}}
 // {{>rPrimeButton}}