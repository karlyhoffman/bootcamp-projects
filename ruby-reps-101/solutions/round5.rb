# Round 5

# Write a function `letterReverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

# ```ruby
# letterReverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letterReverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"
# ```

def letterReverse(string)
	newString = string.split(" ")
	newArray = []
	newString.each do |item|
		newArray.push(item.reverse)
	end
	p newArray.join(" ")
end

letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")