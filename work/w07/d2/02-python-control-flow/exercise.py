# Branching & Looping Exercises
color = None
while color != 'quit':
    color = input('Enter "green", "yellow", "red": ').lower()
    print(f'The user entered {color}')
    if color == 'green':
        print('Go!')
    elif color == 'yellow':
        print('Slow Down!')
    elif color == 'red':
        print('Stop!')
    else:
        print('Game Over!')

# Write the if...elif...else statement as described in the lesson
