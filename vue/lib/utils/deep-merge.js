export function deepMerge(config, customs) {
  if (Array.isArray(config) && Array.isArray(customs)) {
    return [...config, ...customs];
  }

  if (
    typeof config === "object" &&
    config !== null &&
    typeof customs === "object" &&
    customs !== null
  ) {
    return Object.keys({ ...config, ...customs }).reduce((acc, key) => {
      if (key in config && key in customs) {
        acc[key] = deepMerge(config[key], customs[key]);
      } else if (key in config) {
        acc[key] = config[key];
      } else {
        acc[key] = customs[key];
      }
      return acc;
    }, {});
  }

  return customs;
}
