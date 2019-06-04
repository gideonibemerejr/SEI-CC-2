# exercise-01 Vowel or Consonant

# Write the code that:
# 1. Prompts the user to enter a letter in the alphabet:
#      Please enter a letter from the alphabet (a-z or A-Z):
letter = input('Please enter a letter from the alphabet (a-z or A-Z):').lower()

# 2. Write the code that determines whether the letter entered is a vowel
if letter in 'aeiou':
    # 3. Print one of following messages (substituting the letter for x):
    #      - The letter x is a vowel
    #      - The letter x is a consonant
    print(f'the letter {letter} is a vowel')
else:
    print(f'The letter {letter} is a consonant')
# Hints:  Use the in operator to check if a character is in another string
#         For example, if some_char in 'abc':
