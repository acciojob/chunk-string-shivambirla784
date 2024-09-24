function stringChop(str, size) {
  // Handle case where input string is null or size is less than or equal to 0
  if (!str || size <= 0) {
    return [];
  }

	
  // Initialize the result array
  let result = [];

  // Loop through the string, slicing chunks of the given size
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
