export default class Building {
  constructor(sqft) {
    if (this.construnctor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (!(typeof newSqft === 'number')) {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = newSqft;
  }
}
