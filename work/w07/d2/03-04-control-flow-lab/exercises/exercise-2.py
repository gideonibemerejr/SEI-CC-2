# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase:
phrase = None
while phrase != 'quit':
    phrase = input('Please enter a word or phrase:').lower()
# 2. Print the following message:
#      - What you entered is xx characters long
    phrase_len = len(phrase)
    print(f'What you entered is {phrase_len} characters long')
# 3. Return to step 1, unless the word 'quit' was entered.
