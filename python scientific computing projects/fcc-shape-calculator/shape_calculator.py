class Rectangle:
    '''Rectangle class for calculator.'''
    
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return 2 * self.width + 2 * self.height

    def get_diagonal(self):
        return (self.width**2 + self.height**2)**.5

    def get_picture(self):
        if self.width >= 50 or self.height >= 50:
            return 'Too big for picture.'
        lines = [''.join(['*' * self.width, '\n']) for _ in range(self.height)]
        return ''.join(lines)

    def get_amount_inside(self, shape):
        return self.get_area() // shape.get_area()

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'


class Square(Rectangle):
    '''Square class for calclulator, inheriting from Rectangle.'''

    def __init__(self, side):
        self.width = side
        self.height = side

    def set_side(self, side):
        super().set_width(side)
        super().set_height(side)

    def set_width(self, side):
        self.set_side(side)

    def set_height(self, side):
        self.set_side(side)

    def __str__(self):
        return f'Square(side={self.width})'
