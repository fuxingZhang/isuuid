'use strict';

/**
 * @param {String} str String to be verified
 * @param {Number | String} [version] optional, the version of uuid, can be: 1, 2, 3, 4, 5, '1', '2', '3', '4', '5'
 * 
 * @returns {Boolean}
 */
function isuuid(str, version) {
  if (version === undefined) {
    version = '1-5';
  } else if (!'12345'.includes(version)) {
    throw new Error('Invalid parameter');
  }

  const reg = new RegExp(`^[0-9a-f]{8}-[0-9a-f]{4}-[${version}][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`, 'i');

  return reg.test(str)
}

module.exports = isuuid