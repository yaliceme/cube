Facelets = new Meteor.Collection('facelets');

Meteor.methods({
  //Behavior for uButton click
  moveU: function (){
    var newColors = {};
    //up-facing corner facelets
    newColors.fruu = Facelets.findOne("rbuu").color;
    newColors.lfuu = Facelets.findOne("fruu").color;
    newColors.lbuu = Facelets.findOne("lfuu").color;
    newColors.rbuu = Facelets.findOne("lbuu").color;
    //up-facing edge facelets
    newColors.fuu = Facelets.findOne("ruu").color;
    newColors.luu = Facelets.findOne("fuu").color;
    newColors.buu = Facelets.findOne("luu").color;
    newColors.ruu = Facelets.findOne("buu").color;
    //side-facing facelets
    newColors.burr = Facelets.findOne("lubb").color;
    newColors.urr = Facelets.findOne("ubb").color;
    newColors.furr = Facelets.findOne("rubb").color;
    //side-facing facelets
    newColors.ruff = Facelets.findOne("burr").color;
    newColors.uff = Facelets.findOne("urr").color;
    newColors.luff = Facelets.findOne("furr").color;
    //side-facing facelets
    newColors.full = Facelets.findOne("ruff").color;
    newColors.ull = Facelets.findOne("uff").color;
    newColors.bull = Facelets.findOne("luff").color;
    //side-facing facelets
    newColors.lubb = Facelets.findOne("full").color;
    newColors.ubb = Facelets.findOne("ull").color;
    newColors.rubb = Facelets.findOne("bull").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});
Meteor.methods({
  //Behavior for uPrimeButton click
  moveUPrime: function (){
    var newColors = {};
    //up-facing corner facelets
    newColors.rbuu = Facelets.findOne("fruu").color;
    newColors.fruu = Facelets.findOne("lfuu").color;
    newColors.lfuu = Facelets.findOne("lbuu").color;
    newColors.lbuu = Facelets.findOne("rbuu").color;
    //up-facing edge facelets
    newColors.ruu = Facelets.findOne("fuu").color;
    newColors.fuu = Facelets.findOne("luu").color;
    newColors.luu = Facelets.findOne("buu").color;
    newColors.buu = Facelets.findOne("ruu").color;
    //side-facing facelets
    newColors.lubb = Facelets.findOne("burr").color;
    newColors.ubb = Facelets.findOne("urr").color;
    newColors.rubb = Facelets.findOne("furr").color;
    //side-facing facelets
    newColors.burr = Facelets.findOne("ruff").color;
    newColors.urr = Facelets.findOne("uff").color;
    newColors.furr = Facelets.findOne("luff").color;
    //side-facing facelets
    newColors.ruff = Facelets.findOne("full").color;
    newColors.uff = Facelets.findOne("ull").color;
    newColors.luff = Facelets.findOne("bull").color;
    //side-facing facelets
    newColors.full = Facelets.findOne("lubb").color;
    newColors.ull = Facelets.findOne("ubb").color;
    newColors.bull = Facelets.findOne("rubb").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
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