#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=periodic_table --tuples-only -c"
if [[ ! $1 ]]
then
	echo Please provide an element as an argument.
else
	if [[ $1 =~ ^[0-9]+$ ]]
	then
		ATOMIC_NUMBER_RESULT=$($PSQL "
			SELECT atomic_number FROM elements WHERE atomic_number = $1
		")
	else
		ATOMIC_NUMBER_RESULT=$($PSQL "
			SELECT atomic_number FROM elements WHERE name = '$1' or symbol = '$1'
		")
	fi
	if [[ -z $ATOMIC_NUMBER_RESULT ]]
	then
		echo "I could not find that element in the database."
	else
		ATOMIC_DATA=$($PSQL "
			SELECT
				atomic_number,
				name,
				symbol,
				type,
				atomic_mass,
				melting_point_celsius,
				boiling_point_celsius
			FROM elements
			LEFT JOIN properties USING (atomic_number)
			LEFT JOIN types USING (type_id)
			WHERE atomic_number = $ATOMIC_NUMBER_RESULT
		")
		echo $ATOMIC_DATA | while read ATOMIC_NUMBER BAR NAME BAR SYMBOL BAR TYPE BAR MASS BAR MELT BAR BOIL
		do
			echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MELT celsius and a boiling point of $BOIL celsius."
		done
	fi
fi
