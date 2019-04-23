const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
  let dinoCollection = this.dinosaurs;
  dinoCollection.push(dinosaur);
  return dinoCollection;
};

Park.prototype.removeDinosaur = function(){
  let dinoCollection = this.dinosaurs;
  dinoCollection.pop();
  return dinoCollection;
};


module.exports = Park;
