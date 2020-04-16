function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 let a = 1;
 let b = 2;

 for (a; a + b < n; a++) {
     for (let b = a + 1; a + b < n; b++) {
         let c = n - a - b;
         if (a < b < c && c**2 == a**2 + b**2) {
             return a * b * c;
         }
     }
 }
 // Good luck!
}

specialPythagoreanTriplet(1000);
console.log(specialPythagoreanTriplet(24));
console.log(specialPythagoreanTriplet(120));