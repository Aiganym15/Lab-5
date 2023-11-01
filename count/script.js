function getCount(objects) {
    let count = 0;
    for (const object of objects) {
    if (object.x === object.y) {
      count++;
    }
  }
  return count;
}