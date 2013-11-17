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

Template.resetButton.events({
  'click input' : function () {
    Meteor.call('reset');
  }
});

//Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    //standard moves
    if(event.keyCode == 85) {
        Meteor.call('moveU');
    }
    else if(event.keyCode == 68) {
        Meteor.call('moveD');
    }
    else if(event.keyCode == 70) {
        Meteor.call('moveF');
    }
    else if(event.keyCode == 66) {
        Meteor.call('moveB');
    }
    else if(event.keyCode == 76) {
        Meteor.call('moveL');
    }
    else if(event.keyCode == 82) {
        Meteor.call('moveR');
    }
    //slice moves
    if(event.keyCode == 83) {
        Meteor.call('moveS');
    }
    else if(event.keyCode == 69) {
        Meteor.call('moveE');
    }
    else if(event.keyCode == 77) {
        Meteor.call('moveM');
    }
    //rotation
    //up
    else if(event.keyCode == 38) {
        Meteor.call('moveR');
        Meteor.call('moveMPrime');
        Meteor.call('moveLPrime');
    }
    //down
    else if(event.keyCode == 40) {
        Meteor.call('moveRPrime');
        Meteor.call('moveM');
        Meteor.call('moveL');
    }
    //left
    else if(event.keyCode == 37) {
        Meteor.call('moveU');
        Meteor.call('moveEPrime');
        Meteor.call('moveDPrime');
    }
    //right
    else if(event.keyCode == 39) {
        Meteor.call('moveUPrime');
        Meteor.call('moveE');
        Meteor.call('moveD');
    }
    //slash
    else if(event.keyCode == 191) {
        Meteor.call('moveF');
        Meteor.call('moveS');
        Meteor.call('moveBPrime');
    }
    //alt
    else if(event.keyCode == 18) {
        Meteor.call('moveFPrime');
        Meteor.call('moveSPrime');
        Meteor.call('moveB');
    }
    //reset to solved - esc
    else if(event.keyCode == 27) {
        Meteor.call('reset');
    }
});