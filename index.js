'use strict';

/**
 * @param {String} str 
 * @param {String} [version] optional, v1/v2/v3/v4
 * 
 * @returns {Boolean}
 */
function isuuid(str, version) {
  if (version === undefined) {
    version = '1-5';
  } else if (!['v1', 'v2', 'v3', 'v4', 'v5'].includes(version)) {
    throw new Error('Invalid parameter');
  }
  const reg = new RegExp(`^[0-9a-f]{8}-[0-9a-f]{4}-[${version}][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`, 'i');

  return reg.test(str)
}

module.exports = isuuid