Template.cube.facelet = function(faceletID){
  var facelet = Facelets.findOne(faceletID);
  if (facelet)
    return facelet.color;
  return '';
};

//Call "move" Meteor.methods with you click buttons

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

Template.dButton.events({
  'click input' : function () {
    Meteor.call('moveD');
  }
});

Template.dPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveDPrime');
  }
});

Template.eButton.events({
  'click input' : function () {
    Meteor.call('moveE');
  }
});

Template.ePrimeButton.events({
  'click input' : function () {
    Meteor.call('moveEPrime');
  }
});

Template.fButton.events({
  'click input' : function () {
    Meteor.call('moveF');
  }
});

Template.fPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveFPrime');
  }
});

Template.bButton.events({
  'click input' : function () {
    Meteor.call('moveB');
  }
});

Template.bPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveBPrime');
  }
});

Template.lButton.events({
  'click input' : function () {
    Meteor.call('moveL');
  }
});

Template.lPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveLPrime');
  }
});

Template.rButton.events({
  'click input' : function () {
    Meteor.call('moveR');
  }
});

Template.rPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveRPrime');
  }
});
