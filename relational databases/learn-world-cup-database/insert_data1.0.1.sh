#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
echo $($PSQL "TRUNCATE TABLE games, teams;")
cat games.csv | while IFS=',' read YEAR ROUND WINNER OPPONENT WGOALS OGOALS
do
  if [[ $YEAR == year ]]
  then
    continue
  fi
  WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER';")
  if [[ -z $WINNER_ID ]]
  then
    INSERT_RESULT=$($PSQL "INSERT INTO teams (name) VALUES ('$WINNER');")
    if [[ $INSERT_RESULT == "INSERT 0 1" ]]
    then
      # echo Inserted winner: $WINNER
      WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER';")
    fi
  fi

  OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT';")
  if [[ -z $OPPONENT_ID ]]
  then
    INSERT_RESULT=$($PSQL "INSERT INTO teams (name) VALUES ('$OPPONENT');")
    if [[ $INSERT_RESULT == "INSERT 0 1" ]]
    then
      # echo Inserted opponent: $OPPONENT
      OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT';")
    fi
  fi

  GAME_INSERT=$($PSQL "
    INSERT INTO games
      (year, round, winner_id, opponent_id, winner_goals, opponent_goals)
      VALUES
      ($YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WGOALS, $OGOALS);")
  # if [[ $GAME_INSERT == "INSERT 0 1" ]]
  # then
  #   echo Inserted $YEAR $WINNER - $OPPONENT $WGOALS : $OGOALS
  # fi
done
