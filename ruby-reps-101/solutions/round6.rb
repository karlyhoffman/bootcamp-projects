# ## Round 6

# Write a function `longest` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.

# ```javascript
# longest(["oh", "good", "grief"]) # => "grief"
# longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# # => "unrequited"
# ```

def longest(stringArray)
	longestItem = ''
	stringArray.each do |item|
		if item.length >= longestItem.length
			longestItem = item 
		end
	end
	p longestItem
end

longest(["oh", "good", "grief"]) # => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# # => "unrequited"