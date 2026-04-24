function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * Deeply merges user customizations into a base config.
 * Arrays are concatenated and plain objects are recursively merged.
 *
 * @template TConfig
 * @template TCustoms
 * @param {TConfig} config
 * @param {TCustoms} customs
 * @returns {TConfig & TCustoms}
 */
export function deepMerge(config, customs) {
  if (Array.isArray(config) && Array.isArray(customs)) {
    return [...config, ...customs];
  }

  if (isPlainObject(config) && isPlainObject(customs)) {
    return Object.keys({ ...config, ...customs }).reduce(
      (acc, key) => {
        if (key in config && key in customs) {
          acc[key] = deepMerge(config[key], customs[key]);
        } else if (key in config) {
          acc[key] = config[key];
        } else {
          acc[key] = customs[key];
        }
        return acc;
      },
      /** @type {Record<string, unknown>} */ ({}),
    );
  }

  return /** @type {TConfig & TCustoms} */ (customs);
}
