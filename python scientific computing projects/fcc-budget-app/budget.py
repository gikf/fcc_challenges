class Category:
    '''Budgeting class.'''

    def __init__(self, name):
        self.name = name
        self.balance = 0
        self.ledger = []

    def deposit(self, amount, description=''):
        '''Add depisit to ledger.'''
        self.ledger.append({'amount': amount,
                            'description': description})
        self.balance += amount
        
    def withdraw(self, amount, description=''):
        '''Add withdraw to ledger.'''
        if self.check_funds(amount):
            self.ledger.append({'amount': -amount,
                                'description': description})
            self.balance -= amount
            return True
        return False

    def get_balance(self):
        '''Return category balance'''
        return self.balance

    def transfer(self, amount, other):
        '''Transfer amount to other category.'''
        if self.withdraw(amount, f'Transfer to {other.name}'):
            other.deposit(amount, f'Transfer from {self.name}')
            return True
        return False

    def check_funds(self, amount):
        '''Return if balance has enough to cover amount.'''
        return amount <= self.balance

    def __str__(self):
        '''Return category summary.'''
        lines = []
        lines.append(f'{self.name:*^30}')

        for ledge in self.ledger:
            lines.append(f'{ledge["description"][:23]: <23}{ledge["amount"]: >7.02f}')

        lines.append(f'Total: {self.balance:.02f}')

        return '\n'.join(lines)


def create_spend_chart(categories):
    '''Return string imitating bar chart.'''
    lines = ['Percentage spent by category']
    cats = []
    amounts = []

    # Chart
    for category in categories:
        cats.append(category.name)
        amount = 0
        for ledge in category.ledger:
            if ledge['amount'] < 0:
                amount += -ledge['amount']
        amounts.append(amount)
    total_spend = sum(amounts)
    percents = [100 * amount / total_spend for amount in amounts]
    for num in range(100, -1, -10):
        line = [f'{num: >3}|']
        for percent in percents:
            line.append(' o ' if percent >= num else '   ')
        line.append(' ')
        lines.append(''.join(line))
    
    dashes = '-' * (len(lines[-1]) - 4)
    # Category names
    max_name_length = max([len(cat) for cat in cats])
    cats = [f'{name:<{max_name_length}}'for name in cats]
    lines.append(''.join([' ' * 4, dashes]))
    for names_letter in zip(*cats):
        line = '  '.join(names_letter)
        lines.append(''.join([' ' * 4, ' ', line, '  ']))

    return '\n'.join(lines)
