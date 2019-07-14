## Round 3

# Write a function called `toonify` that takes two parameters, `accent` and `sentence`.
# - If `accent` is the string `"daffy"`, return a modified version of `sentence` with all "s" replaced with "th".
# - If the accent is `"elmer"`, replace all "r" with "w".
# - Feel free to add your own accents as well!
# - If the accent is not recognized, just return the sentence as-is.

# ```ruby

# toonify("daffy", "so you smell like sausage")
# #=> "tho you thmell like thauthage"

# ```

def toonify(accent, sentence)
	if accent == "daffy"
		p sentence.gsub("s", "th")
	elsif accent == "elmer"
		p sentence.gsub("r", "w")
	elsif accent == "german"
		p sentence.gsub("w", "v")
	else
		p "Sorry, don't know that accent."
	end
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "root root for the home team");
toonify("german", "what are you saying?");
toonify("french", "what are you saying?");