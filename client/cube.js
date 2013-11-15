Template.cube.facelet = function(faceletID){
  var facelet = Facelets.findOne(faceletID);
  if (facelet)
    return facelet.color;
  return '';
};