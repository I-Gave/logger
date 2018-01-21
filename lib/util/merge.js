'use strict';

/**
 * Merge obj2 into obj1. No deep clone, properties only
 */

module.exports = function merge(obj1, obj2) {
  if (typeof (obj1) !== 'object' || typeof (obj2) !== 'object') {
    throw new Error('merge only accepts Objects parameters');
  }

  return Object.assign(obj1, obj2);
}
;