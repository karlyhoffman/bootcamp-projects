## Round 1
# Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.

# ```ruby
# words = ["hello", "what", "is", "up", "dude"]
# lengths(words)  # => [5, 4, 2, 2, 4]
# ```

words = ["hello", "what", "is", "up", "dude"]

def lengths(stringArray)
	wordsLength = []
	stringArray.each do |item|
  		wordsLength.push(item.length)
	end
	p wordsLength
end

lengths(words)
