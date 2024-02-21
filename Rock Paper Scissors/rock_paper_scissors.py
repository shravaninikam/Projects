import random

def play():
    user = input("\nWhat is your choice?\n1. Rock [r]\n2. Paper [p]\n3. Scissors [s]\n\nEnter your choice: ").lower()
    computer = random.choice(['r', 'p', 's'])
    print(f"Computer's choice: {computer}")
    print("------------------------")

    if user == computer:
        return "It's a tie"

    if isWin(user, computer):
        return "You have won!"

    return "You have lost"

def isWin(player, opponent):
    if (player == 'r' and opponent == 's') or (player == 'p' and opponent == 'r') or (player == 's' and opponent == 'p'):
        return True

result = play()
print(result)
print("------------------------")