export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  get location() {
    return this._locatio;
  }

  set location(newLocatio) {
    this._location = newLocatio;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
