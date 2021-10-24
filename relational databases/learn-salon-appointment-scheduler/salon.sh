#! /bin/bash
PSQL="psql --username=freecodecamp --dbname=salon --tuples-only -c"
echo -e "\n~~~~~ MY SALON ~~~~~\n"
echo -e "\nWelcome to my salon, how can I help you?"

MAIN_MENU() {
	if [[ $1 ]]
	then
		echo -e "\n$1"
	fi
	SERVICES=$($PSQL "SELECT service_id, name FROM services")
	echo "$SERVICES" | while read SERVICE_ID BAR NAME
	do
		echo "$SERVICE_ID) $NAME"
	done
	read SERVICE_ID_SELECTED
	if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]]
	then
		MAIN_MENU "I could not find that service. What would you like today?"
	else
		SERVICE_ID=$($PSQL "
			SELECT service_id FROM services WHERE service_id = $SERVICE_ID_SELECTED
		")
		if [[ -z $SERVICE_ID ]]
		then
			MAIN_MENU "I could not find that service. What would you like today?"
		else
			SERVICE_NAME=$($PSQL "
				SELECT name FROM services
				WHERE service_id = $SERVICE_ID
			")
			echo -e "\nWhat's your phone number?"
			read CUSTOMER_PHONE
			CUSTOMER_NAME=$($PSQL "
				SELECT name FROM customers WHERE phone = '$CUSTOMER_PHONE'
			")
			if [[ -z $CUSTOMER_NAME ]]
			then
				echo -e "\nI don't have a record for that phone number, what's your name?"
				read CUSTOMER_NAME
				INSERT_CUSTOMER=$($PSQL "
					INSERT INTO customers (phone, name)
					VALUES
					('$CUSTOMER_PHONE', '$CUSTOMER_NAME')
				")
			fi
			CUSTOMER_ID=$($PSQL "
				SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'
			")
			echo -e "\nWhat time would you like your $SERVICE_NAME, $CUSTOMER_NAME?"
			read SERVICE_TIME
			INSERT_APPOINTMENT=$($PSQL "
				INSERT INTO appointments
				(customer_id, service_id, time)
				VALUES
				($CUSTOMER_ID, $SERVICE_ID, '$SERVICE_TIME')
			")
			echo -e "\nI have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
		fi
	fi
}

MAIN_MENU