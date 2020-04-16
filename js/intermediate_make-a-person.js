var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return self.firstName + " " + self.lastName;
  };
  
  this.getLastName = function() {
    return self.lastName;
  }
  
  this.getFirstName = function() {
    return self.firstName;
  };

  this.setFirstName = function(firstName) {
    self.firstName = firstName;
  }

  this.setLastName = function(lastName) {
    self.lastName = lastName;
  }

  this.setFullName = function(firstAndLast) {
    let arr = firstAndLast.split(" ");
    let firstName = arr[0]
    let lastName = arr[1];
    self.firstName = firstName;
    self.lastName = lastName;
  }

  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();
