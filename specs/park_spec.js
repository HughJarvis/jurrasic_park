const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurrasic', 50, [dinosaur1, dinosaur2, dinosaur3] );
    dinosaur1 = new Dinosaur('Triceratops', 'herbivore', 20);
    dinosaur2 = new Dinosaur('Diplodocus', 'herbivore', 10);
    dinosaur3 = new Dinosaur('Velociraptor', 'omnivore', 30);
    dinosaur4 = new Dinosaur('Pterodactyl', 'omnivore', 20);

  });

  xit('should have a name', function () {
    const actual = this.name;
    assert.equal(actual, 'Jurrasic');
  });

  xit('should have a ticket price', function () {
    const actual = this.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  xit('should have a collection of dinosaurs', function () {
    const actual = this.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    const actual = this.dinosaurs.length;
    assert.StrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur();
    const actual = this.dinosaurs.length;
    assert.StrictEqual(actual, 2);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
