function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // заміщаємо всі пробіли (і їх комбінації) на тире
    .replace(/[^\w\-]+/g, ''); // видаляємо всі символи, які не є буквами, цифрами або тире
}

console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
