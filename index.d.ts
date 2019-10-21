// Type definitions

/**
 * Options:
 *   - `str` String to be verified
 *   - `version` optional, the version of uuid, can be: 1, 2, 3, 4, 5, '1', '2', '3', '4', '5'
 */
declare function isuuid(str: string, version?: number | string): boolean

export = isuuid