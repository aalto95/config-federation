export function deepMerge(target, source) {
  if (Array.isArray(target) && Array.isArray(source)) {
    return [...target, ...source];
  }

  if (
    typeof target === "object" &&
    target !== null &&
    typeof source === "object" &&
    source !== null
  ) {
    return Object.keys({ ...target, ...source }).reduce((acc, key) => {
      if (key in target && key in source) {
        acc[key] = deepMerge(target[key], source[key]);
      } else if (key in target) {
        acc[key] = target[key];
      } else {
        acc[key] = source[key];
      }
      return acc;
    }, {});
  }

  return source;
}
