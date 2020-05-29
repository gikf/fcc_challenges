def add_time(start, duration, start_day=None):
    '''Return time after adding duration to start.
    
    If start_day is present add what day it will be.'''
    # Initial variables assigning
    day_to_number = {'monday': 0,
                    'tuesday': 1,
                    'wednesday': 2,
                    'thursday': 3,
                    'friday': 4,
                    'saturday': 5,
                    'sunday': 6}
    number_to_day = {0: 'Monday',
                     1: 'Tuesday',
                     2: 'Wednesday',
                     3: 'Thursday',
                     4: 'Friday',
                     5: 'Saturday',
                     6: 'Sunday'}
    days_passed = 0

    time, midnight = start.split()
    start_hour, start_minute = [int(num) for num in time.split(':')]
    dur_hours, dur_minutes = [int(num) for num in duration.split(':')]

    # Minutes updating
    minutes = start_minute + dur_minutes
    if minutes >= 60:
        minutes = minutes % 60
        start_hour += 1

    # Hours updating
    if midnight == 'PM':
        start_hour += 12

    hours = start_hour + dur_hours
    days_passed = hours // 24

    # Aligning hours to 24-hour format and determine AM/PM
    hours = hours % 24
    if hours < 12:
        midnight = 'AM'
    else:
        midnight = 'PM'
    
    # Aligning hours to 12-hour format
    hours = hours % 12
    if hours == 0:
        hours += 12

    formatted = [f'{hours}:{minutes:02} {midnight}']

    if start_day:
        current_day_num = day_to_number[start_day.lower()]
        final_day = number_to_day[(current_day_num + days_passed) % 7]
        formatted.append(f', {final_day}')
    
    if days_passed == 1:
        formatted.append(' (next day)')
    elif days_passed > 1:
        formatted.append(f' ({days_passed} days later)')

    return ''.join(formatted)