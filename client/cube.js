Template.cube.facelet = function(faceletID){
  var facelet = Facelets.findOne(faceletID);
  if (facelet)
    return facelet.color;
  return '';
};

//Call "move" Meteor.methods when you click buttons

//U  U'  D  D'  E  E'
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

Template.yButton.events({
  'click input' : function () {
    Meteor.call('moveU');
    Meteor.call('moveEPrime');
    Meteor.call('moveDPrime');
  }
});
Template.yPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveUPrime');
    Meteor.call('moveE');
    Meteor.call('moveD');
  }
});

//F  F'  B  B'  S  S'
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

Template.sButton.events({
  'click input' : function () {
    Meteor.call('moveS');
  }
});
Template.sPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveSPrime');
  }
});

Template.zButton.events({
  'click input' : function () {
    Meteor.call('moveF');
    Meteor.call('moveS');
    Meteor.call('moveBPrime');
  }
});
Template.zPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveFPrime');
    Meteor.call('moveSPrime');
    Meteor.call('moveB');
  }
});

//L  L'  R  R'  M  M'

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

Template.mButton.events({
  'click input' : function () {
    Meteor.call('moveM');
  }
});
Template.mPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveMPrime');
  }
});

Template.xButton.events({
  'click input' : function () {
    Meteor.call('moveR');
    Meteor.call('moveMPrime');
    Meteor.call('moveLPrime');
  }
});
Template.xPrimeButton.events({
  'click input' : function () {
    Meteor.call('moveRPrime');
    Meteor.call('moveM');
    Meteor.call('moveL');
  }
});
