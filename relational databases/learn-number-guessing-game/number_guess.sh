#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=guessing_game -t -c"
echo "Enter your username:"
read USERNAME
USER_ID=$($PSQL "SELECT user_id FROM users WHERE name = '$USERNAME'")
if [[ -z $USER_ID ]]
then
	echo "Welcome, $USERNAME! It looks like this is your first time here."
	USER_INSERT=$($PSQL "
		INSERT INTO users (name) VALUES ('$USERNAME')
	")
	USER_ID=$($PSQL "SELECT user_id FROM users WHERE name = '$USERNAME'")
else
	USER_DATA=$($PSQL "
		SELECT total_games, best_game FROM users
		WHERE user_id = $USER_ID
	")
	echo "$USER_DATA" | while read TOTAL_GAMES BAR BEST_GAME
	do
		echo "Welcome back, $USERNAME! You have played $TOTAL_GAMES games, and your best game took $BEST_GAME guesses."
	done
fi

echo "Guess the secret number between 1 and 1000:"
GUESSES=0
SECRET=$(( RANDOM % 1000 + 1 ))
GUESS=0
while (( GUESS != SECRET ))
do
	read GUESS
	if [[ ! $GUESS =~ ^[0-9]+$ ]]
	then
		echo "That is not an integer, guess again:"
	else
		if (( GUESS > SECRET ))
		then
			echo "It's lower than that, guess again:"
		elif (( GUESS < SECRET ))
		then
			echo "It's higher than that, guess again:"
		fi
	fi
	(( GUESSES++ ))
done

echo "You guessed it in $GUESSES tries. The secret number was $SECRET. Nice job!"

if (( BEST_GAME == -1 || BEST_GAME < GUESSES ))
then
	NEW_BEST=$GUESSES
else
	NEW_BEST=$BEST_GAME
fi
UPDATE_USER=$($PSQL "
	UPDATE users SET total_games =+ 1, best_game = $NEW_BEST
	WHERE user_id = $USER_ID
")
