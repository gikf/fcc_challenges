function Num(n) {
  if (!Number.isInteger(n)) {
    throw TypeError('Not a Number');
  }

  if (n <= 0 || n >= 10) {
    throw TypeError('Out of range');
  }

  this._value = n;

  this.valueOf = () => {
    return this._value;
  }

  this.toString = () => {
    return this._value.toString();
  }
}
