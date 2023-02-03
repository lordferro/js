function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min)
}

console.log(getRandomTime(1, 10));