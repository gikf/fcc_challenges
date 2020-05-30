import copy
import random
# Consider using the modules imported above.

class Hat:
    '''Class keeping balls and drawing.'''
    def __init__(self, **kwargs):
        self.contents = []
        self.kwargs = kwargs
        self.fill_hat()

    def fill_hat(self):
        for ball_color, number in self.kwargs.items():
            self.contents += [ball_color for _ in range(number)]

    def draw(self, num_balls_drawn):
        '''Return list of balls_number balls drew from the hat.
        
        Remove each picked ball from the hat contents. When hat contents are empty return all balss to the contents.'''
        picks = []
        for _ in range(num_balls_drawn):
            if len(self.contents) == 0:
                self.fill_hat()

            ball_num = random.randrange(len(self.contents))
            picks.append(self.contents.pop(ball_num))
        return picks


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    '''Perform num_experiments drawings of num_balls_drawn.'''
    successful_draws = 0
    for experiment in range(num_experiments):
        # Workd copy of the hat
        work_hat = copy.deepcopy(hat)
        success = True

        # Perform drawing, count occurences of each ball
        draw_result = work_hat.draw(num_balls_drawn)
        draw_ball_counts = {ball_color: draw_result.count(ball_color) for ball_color in set(draw_result)}

        # Compare results with the expected balls
        for expected_ball_color, expected_count in expected_balls.items():
            if expected_count > draw_ball_counts.get(expected_ball_color, 0):
                success = False
                break
        if success:
            successful_draws += 1
    return successful_draws / num_experiments
