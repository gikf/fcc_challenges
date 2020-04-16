var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key, value) {
    const key_hash = hash(key);
    if (this.collection[key_hash] != null) {
      this.collection[key_hash][key] = value;
    } else {
      this.collection[key_hash] = {};
      this.collection[key_hash][key] = value;
    }
  }

  this.remove = function(key) {
    delete (this.collection[hash(key)][key]);
  }

  this.lookup = function(key) {
    const key_hash = hash(key);
    if (this.collection[key_hash]) {
      return this.collection[key_hash][key];
    } else {
      return null;
    }
  }
  // change code above this line
};

let h = new HashTable();
h.add('key1', 'bla2');
h.add('1key', 'blabla');
h.add('key1', 'bla');
console.log(h.lookup('key1'));
