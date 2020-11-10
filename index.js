// Code your solution here
function findMatching(arr, name) {
  return arr.filter(x => x.toLowerCase() === name.toLowerCase())
};

function fuzzyMatch(arr, name) {
  return arr.filter(x => x.include(name))
};
