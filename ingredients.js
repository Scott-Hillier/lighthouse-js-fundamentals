const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var x = 0;
while (x < ingredients.length - 1) {
  console.log(ingredients[x])
  x += 1;
}

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i <= ingredients.length -1; i++) {
  console.log(ingredients[i])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
ingredients.reverse();
for (var j = 0; j <= ingredients.length -1; j++) {
  console.log(ingredients[j])
}