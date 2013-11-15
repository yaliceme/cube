Facelets = new Meteor.Collection('facelets');

//Behavior for uButton click
Meteor.methods({
  moveU: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.fruu = Facelets.findOne("rbuu").color;
    newColors.lfuu = Facelets.findOne("fruu").color;
    newColors.lbuu = Facelets.findOne("lfuu").color;
    newColors.rbuu = Facelets.findOne("lbuu").color;
    //out-facing edge facelets
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

//Behavior for uPrimeButton click
Meteor.methods({
  moveUPrime: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.rbuu = Facelets.findOne("fruu").color;
    newColors.fruu = Facelets.findOne("lfuu").color;
    newColors.lfuu = Facelets.findOne("lbuu").color;
    newColors.lbuu = Facelets.findOne("rbuu").color;
    //out-facing edge facelets
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

//Behavior for dButton click
Meteor.methods({
  moveD: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.lfdd = Facelets.findOne("bldd").color;
    newColors.frdd = Facelets.findOne("lfdd").color;
    newColors.rbdd = Facelets.findOne("frdd").color;
    newColors.bldd = Facelets.findOne("rbdd").color;
    //out-facing edge facelets
    newColors.fdd = Facelets.findOne("ldd").color;
    newColors.rdd = Facelets.findOne("fdd").color;
    newColors.bdd = Facelets.findOne("rdd").color;
    newColors.ldd = Facelets.findOne("bdd").color;
    //side-facing facelets
    newColors.bdll = Facelets.findOne("drbb").color;
    newColors.dll = Facelets.findOne("dbb").color;
    newColors.dfll = Facelets.findOne("ldbb").color;
    //side-facing facelets
    newColors.dlff = Facelets.findOne("bdll").color;
    newColors.dff = Facelets.findOne("dll").color;
    newColors.drff = Facelets.findOne("dfll").color;
    //side-facing facelets
    newColors.fdrr = Facelets.findOne("dlff").color;
    newColors.drr = Facelets.findOne("dff").color;
    newColors.bdrr = Facelets.findOne("drff").color;
    //side-facing facelets
    newColors.drbb = Facelets.findOne("fdrr").color;
    newColors.dbb = Facelets.findOne("drr").color;
    newColors.ldbb = Facelets.findOne("bdrr").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for dPrimeButton click
Meteor.methods({
  moveDPrime: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.bldd = Facelets.findOne("lfdd").color;
    newColors.lfdd = Facelets.findOne("frdd").color;
    newColors.frdd = Facelets.findOne("rbdd").color;
    newColors.rbdd = Facelets.findOne("bldd").color;
    //out-facing edge facelets
    newColors.ldd = Facelets.findOne("fdd").color;
    newColors.fdd = Facelets.findOne("rdd").color;
    newColors.rdd = Facelets.findOne("bdd").color;
    newColors.bdd = Facelets.findOne("ldd").color;
    //side-facing facelets
    newColors.drbb = Facelets.findOne("bdll").color;
    newColors.dbb = Facelets.findOne("dll").color;
    newColors.ldbb = Facelets.findOne("dfll").color;
    //side-facing facelets
    newColors.bdll = Facelets.findOne("dlff").color;
    newColors.dll = Facelets.findOne("dff").color;
    newColors.dfll = Facelets.findOne("drff").color;
    //side-facing facelets
    newColors.dlff = Facelets.findOne("fdrr").color;
    newColors.dff = Facelets.findOne("drr").color;
    newColors.drff = Facelets.findOne("bdrr").color;
    //side-facing facelets
    newColors.fdrr = Facelets.findOne("drbb").color;
    newColors.drr = Facelets.findOne("dbb").color;
    newColors.bdrr = Facelets.findOne("ldbb").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for eButton click
Meteor.methods({
  moveE: function (){
    var newColors = {};

    newColors.lff = Facelets.findOne("bll").color;
    newColors.f = Facelets.findOne("l").color;
    newColors.rff = Facelets.findOne("fll").color;

    newColors.frr = Facelets.findOne("lff").color;
    newColors.r = Facelets.findOne("f").color;
    newColors.brr = Facelets.findOne("rff").color;

    newColors.rbb = Facelets.findOne("frr").color;
    newColors.b = Facelets.findOne("r").color;
    newColors.lbb = Facelets.findOne("brr").color;

    newColors.bll = Facelets.findOne("rbb").color;
    newColors.l = Facelets.findOne("b").color;
    newColors.fll = Facelets.findOne("lbb").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for ePrimeButton click
Meteor.methods({
  moveEPrime: function (){
    var newColors = {};

    newColors.bll = Facelets.findOne("lff").color;
    newColors.l = Facelets.findOne("f").color;
    newColors.fll = Facelets.findOne("rff").color;

    newColors.lff = Facelets.findOne("frr").color;
    newColors.f = Facelets.findOne("r").color;
    newColors.rff = Facelets.findOne("brr").color;

    newColors.frr = Facelets.findOne("rbb").color;
    newColors.r = Facelets.findOne("b").color;
    newColors.brr = Facelets.findOne("lbb").color;

    newColors.rbb = Facelets.findOne("bll").color;
    newColors.b = Facelets.findOne("l").color;
    newColors.lbb = Facelets.findOne("fll").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for fButton click
Meteor.methods({
  moveF: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.drff = Facelets.findOne("ruff").color;
    newColors.dlff = Facelets.findOne("drff").color;
    newColors.luff = Facelets.findOne("dlff").color;
    newColors.ruff = Facelets.findOne("luff").color;
    //out-facing edge facelets
    newColors.dff = Facelets.findOne("rff").color;
    newColors.lff = Facelets.findOne("dff").color;
    newColors.uff = Facelets.findOne("lff").color;
    newColors.rff = Facelets.findOne("uff").color;
    //side-facing facelets
    newColors.furr = Facelets.findOne("lfuu").color;
    newColors.frr = Facelets.findOne("fuu").color;
    newColors.fdrr = Facelets.findOne("fruu").color;
    //side-facing facelets
    newColors.frdd = Facelets.findOne("furr").color;
    newColors.fdd = Facelets.findOne("frr").color;
    newColors.lfdd = Facelets.findOne("fdrr").color;
    //side-facing facelets
    newColors.dfll = Facelets.findOne("frdd").color;
    newColors.fll = Facelets.findOne("fdd").color;
    newColors.full = Facelets.findOne("lfdd").color;
    //side-facing facelets
    newColors.lfuu = Facelets.findOne("dfll").color;
    newColors.fuu = Facelets.findOne("fll").color;
    newColors.fruu = Facelets.findOne("full").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for fPrimeButton click
Meteor.methods({
  moveFPrime: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.ruff = Facelets.findOne("drff").color;
    newColors.drff = Facelets.findOne("dlff").color;
    newColors.dlff = Facelets.findOne("luff").color;
    newColors.luff = Facelets.findOne("ruff").color;
    //out-facing edge facelets
    newColors.rff = Facelets.findOne("dff").color;
    newColors.dff = Facelets.findOne("lff").color;
    newColors.lff = Facelets.findOne("uff").color;
    newColors.uff = Facelets.findOne("rff").color;
    //side-facing facelets
    newColors.lfuu = Facelets.findOne("furr").color;
    newColors.fuu = Facelets.findOne("frr").color;
    newColors.fruu = Facelets.findOne("fdrr").color;
    //side-facing facelets
    newColors.furr = Facelets.findOne("frdd").color;
    newColors.frr = Facelets.findOne("fdd").color;
    newColors.fdrr = Facelets.findOne("lfdd").color;
    //side-facing facelets
    newColors.frdd = Facelets.findOne("dfll").color;
    newColors.fdd = Facelets.findOne("fll").color;
    newColors.lfdd = Facelets.findOne("full").color;
    //side-facing facelets
    newColors.dfll = Facelets.findOne("lfuu").color;
    newColors.fll = Facelets.findOne("fuu").color;
    newColors.full = Facelets.findOne("fruu").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for bButton click
Meteor.methods({
  moveB: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.rubb = Facelets.findOne("drbb").color;
    newColors.lubb = Facelets.findOne("rubb").color;
    newColors.ldbb = Facelets.findOne("lubb").color;
    newColors.drbb = Facelets.findOne("ldbb").color;
    //out-facing edge facelets
    newColors.ubb = Facelets.findOne("rbb").color;
    newColors.lbb = Facelets.findOne("ubb").color;
    newColors.dbb = Facelets.findOne("lbb").color;
    newColors.rbb = Facelets.findOne("dbb").color;
    //side-facing facelets
    newColors.bdrr = Facelets.findOne("bldd").color;
    newColors.brr = Facelets.findOne("bdd").color;
    newColors.burr = Facelets.findOne("rbdd").color;
    //side-facing facelets
    newColors.rbuu = Facelets.findOne("bdrr").color;
    newColors.buu = Facelets.findOne("brr").color;
    newColors.lbuu = Facelets.findOne("burr").color;
    //side-facing facelets
    newColors.bull = Facelets.findOne("rbuu").color;
    newColors.bll = Facelets.findOne("buu").color;
    newColors.bdll = Facelets.findOne("lbuu").color;
    //side-facing facelets
    newColors.bldd = Facelets.findOne("bull").color;
    newColors.bdd = Facelets.findOne("bll").color;
    newColors.rbdd = Facelets.findOne("bdll").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for bPrimeButton click
Meteor.methods({
  moveBPrime: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.drbb = Facelets.findOne("rubb").color;
    newColors.rubb = Facelets.findOne("lubb").color;
    newColors.lubb = Facelets.findOne("ldbb").color;
    newColors.ldbb = Facelets.findOne("drbb").color;
    //out-facing edge facelets
    newColors.rbb = Facelets.findOne("ubb").color;
    newColors.ubb = Facelets.findOne("lbb").color;
    newColors.lbb = Facelets.findOne("dbb").color;
    newColors.dbb = Facelets.findOne("rbb").color;
    //side-facing facelets
    newColors.bldd = Facelets.findOne("bdrr").color;
    newColors.bdd = Facelets.findOne("brr").color;
    newColors.rbdd = Facelets.findOne("burr").color;
    //side-facing facelets
    newColors.bdrr = Facelets.findOne("rbuu").color;
    newColors.brr = Facelets.findOne("buu").color;
    newColors.burr = Facelets.findOne("lbuu").color;
    //side-facing facelets
    newColors.rbuu = Facelets.findOne("bull").color;
    newColors.buu = Facelets.findOne("bll").color;
    newColors.lbuu = Facelets.findOne("bdll").color;
    //side-facing facelets
    newColors.bull = Facelets.findOne("bldd").color;
    newColors.bll = Facelets.findOne("bdd").color;
    newColors.bdll = Facelets.findOne("rbdd").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for sButton click
Meteor.methods({
  moveS: function (){
    var newColors = {};

    newColors.luu = Facelets.findOne("dll").color;
    newColors.u = Facelets.findOne("l").color;
    newColors.ruu = Facelets.findOne("ull").color;

    newColors.urr = Facelets.findOne("luu").color;
    newColors.r = Facelets.findOne("u").color;
    newColors.drr = Facelets.findOne("ruu").color;

    newColors.rdd = Facelets.findOne("urr").color;
    newColors.d = Facelets.findOne("r").color;
    newColors.ldd = Facelets.findOne("drr").color;

    newColors.dll = Facelets.findOne("rdd").color;
    newColors.l = Facelets.findOne("d").color;
    newColors.ull = Facelets.findOne("ldd").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for sPrimeButton click
Meteor.methods({
  moveSPrime: function (){
    var newColors = {};

    newColors.dll = Facelets.findOne("luu").color;
    newColors.l = Facelets.findOne("u").color;
    newColors.ull = Facelets.findOne("ruu").color;

    newColors.luu = Facelets.findOne("urr").color;
    newColors.u = Facelets.findOne("r").color;
    newColors.ruu = Facelets.findOne("drr").color;

    newColors.urr = Facelets.findOne("rdd").color;
    newColors.r = Facelets.findOne("d").color;
    newColors.drr = Facelets.findOne("ldd").color;

    newColors.rdd = Facelets.findOne("dll").color;
    newColors.d = Facelets.findOne("l").color;
    newColors.ldd = Facelets.findOne("ull").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for lButton click
Meteor.methods({
  moveL: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.full = Facelets.findOne("bull").color;
    newColors.dfll = Facelets.findOne("full").color;
    newColors.bdll = Facelets.findOne("dfll").color;
    newColors.bull = Facelets.findOne("bdll").color;
    //out-facing edge facelets
    newColors.fll = Facelets.findOne("ull").color;
    newColors.dll = Facelets.findOne("fll").color;
    newColors.bll = Facelets.findOne("dll").color;
    newColors.ull = Facelets.findOne("bll").color;
    //side-facing facelets
    newColors.lbuu = Facelets.findOne("ldbb").color;
    newColors.luu = Facelets.findOne("lbb").color;
    newColors.lfuu = Facelets.findOne("lubb").color;
    //side-facing facelets
    newColors.luff = Facelets.findOne("lbuu").color;
    newColors.lff = Facelets.findOne("luu").color;
    newColors.dlff = Facelets.findOne("lfuu").color;
    //side-facing facelets
    newColors.lfdd = Facelets.findOne("luff").color;
    newColors.ldd = Facelets.findOne("lff").color;
    newColors.bldd = Facelets.findOne("dlff").color;
    //side-facing facelets
    newColors.ldbb = Facelets.findOne("lfdd").color;
    newColors.lbb = Facelets.findOne("ldd").color;
    newColors.lubb = Facelets.findOne("bldd").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for lPrimeButton click
Meteor.methods({
  moveLPrime: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.bull = Facelets.findOne("full").color;
    newColors.full = Facelets.findOne("dfll").color;
    newColors.dfll = Facelets.findOne("bdll").color;
    newColors.bdll = Facelets.findOne("bull").color;
    //out-facing edge facelets
    newColors.ull = Facelets.findOne("fll").color;
    newColors.fll = Facelets.findOne("dll").color;
    newColors.dll = Facelets.findOne("bll").color;
    newColors.bll = Facelets.findOne("ull").color;
    //side-facing facelets
    newColors.ldbb = Facelets.findOne("lbuu").color;
    newColors.lbb = Facelets.findOne("luu").color;
    newColors.lubb = Facelets.findOne("lfuu").color;
    //side-facing facelets
    newColors.lbuu = Facelets.findOne("luff").color;
    newColors.luu = Facelets.findOne("lff").color;
    newColors.lfuu = Facelets.findOne("dlff").color;
    //side-facing facelets
    newColors.luff = Facelets.findOne("lfdd").color;
    newColors.lff = Facelets.findOne("ldd").color;
    newColors.dlff = Facelets.findOne("bldd").color;
    //side-facing facelets
    newColors.lfdd = Facelets.findOne("ldbb").color;
    newColors.ldd = Facelets.findOne("lbb").color;
    newColors.bldd = Facelets.findOne("lubb").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for rButton click
Meteor.methods({
  moveR: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.fdrr = Facelets.findOne("bdrr").color;
    newColors.furr = Facelets.findOne("fdrr").color;
    newColors.burr = Facelets.findOne("furr").color;
    newColors.bdrr = Facelets.findOne("burr").color;
    //out-facing edge facelets
    newColors.frr = Facelets.findOne("drr").color;
    newColors.urr = Facelets.findOne("frr").color;
    newColors.brr = Facelets.findOne("urr").color;
    newColors.drr = Facelets.findOne("brr").color;
    //side-facing facelets
    newColors.rbdd = Facelets.findOne("rubb").color;
    newColors.rdd = Facelets.findOne("rbb").color;
    newColors.frdd = Facelets.findOne("drbb").color;
    //side-facing facelets
    newColors.drff = Facelets.findOne("rbdd").color;
    newColors.rff = Facelets.findOne("rdd").color;
    newColors.ruff = Facelets.findOne("frdd").color;
    //side-facing facelets
    newColors.fruu = Facelets.findOne("drff").color;
    newColors.ruu = Facelets.findOne("rff").color;
    newColors.rbuu = Facelets.findOne("ruff").color;
    //side-facing facelets
    newColors.rubb = Facelets.findOne("fruu").color;
    newColors.rbb = Facelets.findOne("ruu").color;
    newColors.drbb = Facelets.findOne("rbuu").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for rPrimeButton click
Meteor.methods({
  moveRPrime: function (){
    var newColors = {};
    //out-facing corner facelets
    newColors.bdrr = Facelets.findOne("fdrr").color;
    newColors.fdrr = Facelets.findOne("furr").color;
    newColors.furr = Facelets.findOne("burr").color;
    newColors.burr = Facelets.findOne("bdrr").color;
    //out-facing edge facelets
    newColors.drr = Facelets.findOne("frr").color;
    newColors.frr = Facelets.findOne("urr").color;
    newColors.urr = Facelets.findOne("brr").color;
    newColors.brr = Facelets.findOne("drr").color;
    //side-facing facelets
    newColors.rubb = Facelets.findOne("rbdd").color;
    newColors.rbb = Facelets.findOne("rdd").color;
    newColors.drbb = Facelets.findOne("frdd").color;
    //side-facing facelets
    newColors.rbdd = Facelets.findOne("drff").color;
    newColors.rdd = Facelets.findOne("rff").color;
    newColors.frdd = Facelets.findOne("ruff").color;
    //side-facing facelets
    newColors.drff = Facelets.findOne("fruu").color;
    newColors.rff = Facelets.findOne("ruu").color;
    newColors.ruff = Facelets.findOne("rbuu").color;
    //side-facing facelets
    newColors.fruu = Facelets.findOne("rubb").color;
    newColors.ruu = Facelets.findOne("rbb").color;
    newColors.rbuu = Facelets.findOne("drbb").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for mButton click
Meteor.methods({
  moveM: function (){
    var newColors = {};

    newColors.buu = Facelets.findOne("dbb").color;
    newColors.u = Facelets.findOne("b").color;
    newColors.fuu = Facelets.findOne("ubb").color;

    newColors.uff = Facelets.findOne("buu").color;
    newColors.f = Facelets.findOne("u").color;
    newColors.dff = Facelets.findOne("fuu").color;

    newColors.fdd = Facelets.findOne("uff").color;
    newColors.d = Facelets.findOne("f").color;
    newColors.bdd = Facelets.findOne("dff").color;

    newColors.dbb = Facelets.findOne("fdd").color;
    newColors.b = Facelets.findOne("d").color;
    newColors.ubb = Facelets.findOne("bdd").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for mPrimeButton click
Meteor.methods({
  moveMPrime: function (){
    var newColors = {};

    newColors.dbb = Facelets.findOne("buu").color;
    newColors.b = Facelets.findOne("u").color;
    newColors.ubb = Facelets.findOne("fuu").color;

    newColors.buu = Facelets.findOne("uff").color;
    newColors.u = Facelets.findOne("f").color;
    newColors.fuu = Facelets.findOne("dff").color;

    newColors.uff = Facelets.findOne("fdd").color;
    newColors.f = Facelets.findOne("d").color;
    newColors.dff = Facelets.findOne("bdd").color;

    newColors.fdd = Facelets.findOne("dbb").color;
    newColors.d = Facelets.findOne("b").color;
    newColors.bdd = Facelets.findOne("ubb").color;

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});

//Behavior for resetButton click
Meteor.methods({
  reset: function (){
    var newColors = {};
//Up resets to white
    newColors.lbuu = "White";
    newColors.buu = "White";
    newColors.rbuu = "White";

    newColors.luu = "White";
    newColors.u = "White";
    newColors.ruu = "White";

    newColors.lfuu = "White";
    newColors.fuu = "White";
    newColors.fruu = "White";

//Down resets to yellow
    newColors.rbdd = "Yellow";
    newColors.bdd = "Yellow";
    newColors.bldd = "Yellow";

    newColors.rdd = "Yellow";
    newColors.d = "Yellow";
    newColors.ldd = "Yellow";

    newColors.frdd = "Yellow";
    newColors.fdd = "Yellow";
    newColors.lfdd = "Yellow";

//Front resets to green
    newColors.luff = "Green";
    newColors.uff = "Green";
    newColors.ruff = "Green";

    newColors.lff = "Green";
    newColors.f = "Green";
    newColors.rff = "Green";

    newColors.dlff = "Green";
    newColors.dff = "Green";
    newColors.drff = "Green";
 
//Back resets to blue
    newColors.ldbb = "Blue";
    newColors.dbb = "Blue";
    newColors.drbb = "Blue";

    newColors.lbb = "Blue";
    newColors.b = "Blue";
    newColors.rbb = "Blue";

    newColors.lubb = "Blue";
    newColors.ubb = "Blue";
    newColors.rubb = "Blue";

//Left resets to orange
    newColors.bdll = "Orange";
    newColors.bll = "Orange";
    newColors.bull = "Orange";

    newColors.dll = "Orange";
    newColors.l = "Orange";
    newColors.ull = "Orange";

    newColors.dfll = "Orange";
    newColors.fll = "Orange";
    newColors.full = "Orange";

//Right resets to red
    newColors.burr = "Red";
    newColors.brr = "Red";
    newColors.bdrr = "Red";

    newColors.urr = "Red";
    newColors.r = "Red";
    newColors.drr = "Red";

    newColors.furr = "Red";
    newColors.frr = "Red";
    newColors.fdrr = "Red";

    _.each(newColors, function(color, faceletId){
      Facelets.update(faceletId, {$set:{color:color}});
    })
  }
});
