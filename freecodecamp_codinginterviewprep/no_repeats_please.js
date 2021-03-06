// takes a string input to generate all permutations
const generate_string_permutations = input_string => {

    // array to store generated permutations
    var permutations = []

    // one char string
    if (input_string.length == 1) {
        permutations.push(input_string)
        // console.log(permutations) 
        return permutations
    }

    // when string has more than one char
    else {

        // loop over the entire string 
        for ( var index = 0; index < input_string.length; index++ ) {
            var first_char = input_string[index]
            var remaining_chars = input_string.substring(0, index) + input_string.substring(index + 1)

            // console.log('\nREMAINING CHARS:\n', remaining_chars)

            var subset_permutations = generate_string_permutations(remaining_chars)
            for (var subset_index = 0; subset_index < subset_permutations.length; subset_index++) {

                // console.log('\nSUB PERMUTATION GENERATED\n',first_char + subset_permutations[subset_index])
                permutations.push(first_char + subset_permutations[subset_index])

            }
        }

        return permutations

    }
        

}

function permAlone(str) {

  const string_permutations = generate_string_permutations(str)
  let perm_count = string_permutations.length

  for (let item of string_permutations) {

    for (let count = 0; count < item.length - 1; count++) {
      if (item[count] === item[count + 1]) {
        perm_count--
        break
      }
    }

  }

  return perm_count
  
}

permAlone('aab');