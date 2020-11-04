# The example function below keeps track of the opponent's history and plays whatever the opponent played two plays ago. It is not a very good player so you will need to change the code to pass the challenge.

import random


def player(prev_opponent_play, opponent_history=[],
           play_order=[{}]):

    n = 7

    if prev_opponent_play in ['R', 'P', 'S']:
        opponent_history.append(prev_opponent_play)

    if len(opponent_history) <= n:
        return random.choice(['R', 'P', 'S'])

    last_moves = ''.join(opponent_history[-n:])
    play_order[0][last_moves] = play_order[0].get(last_moves, 0) + 1

    potential_plays = [
        last_moves[1:] + "R",
        last_moves[1:] + "P",
        last_moves[1:] + "S",
    ]

    for play in potential_plays:
        if play not in play_order[0]:
            play_order[0][play] = 0

    prediction = max(potential_plays, key=play_order[0].get)[-1]

    ideal_response = {'P': 'S', 'R': 'P', 'S': 'R'}
    return ideal_response[prediction]
