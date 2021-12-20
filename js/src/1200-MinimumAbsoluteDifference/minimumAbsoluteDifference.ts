export function minimumAbsDifference(arr: number[]): number[][] {
  let minimum = Number.MAX_SAFE_INTEGER;

  return arr.sort((a, b) => a - b).reduce((pairObject, item) => {
    const difference = item - pairObject.previous
    if (difference > 0) {
      if (difference < minimum) {
        minimum = difference;
        pairObject.result = [[pairObject.previous, item]];
      } else if (difference === minimum) {
        pairObject.result.push([pairObject.previous, item])
      }
    }
    pairObject.previous = item;
    return pairObject;
  }, {
    result: [[0, 0]],
    previous: minimum
  }).result;
}
