## Round 2

# Write a Ruby function called `transmogrifier`
# This function should accept three arguments, which you can assume will be numbers.
# Your function should return the "transmogrified" result

# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.

# For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225.

# Use your function to find the following answers.

# ```ruby
# transmogrifier(5, 4, 3)
# transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)
# ```

def transmogrifier(num1,num2,num3)
	p (num1*num2)**num3
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)
