## Round 4

# Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry
# about punctuation.

# ```ruby
# wordReverse("Now I know what a TV dinner feels like")
# # => "like feels dinner TV a what know I Now"
# ```

def wordReverse(string)
	p string.split(" ").reverse().join(" ")
end

wordReverse("Now I know what a TV dinner feels like")