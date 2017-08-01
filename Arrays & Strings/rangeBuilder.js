
var rangeBuilder = (start, end, step) => {
  if (!start) {
    return null;
  }
  if (!end) {
    return start;
  }
  if (!step) {
    step = start < end ? 1 : -1; // if allowing negative steps, you'll have to build a second for loop to handle it.
  }
  for (let i = start; i <= end; i += step) {
    console.log(i);
  }
}
