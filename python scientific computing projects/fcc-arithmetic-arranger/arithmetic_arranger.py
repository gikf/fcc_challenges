def arithmetic_arranger(problems, compute=False):
    ''''''
    if len(problems) > 5:
        return 'Error: Too many problems.'

    first_line = []
    second_line = []
    dashes = []
    results = []

    for problem in problems:
        try:
            num1, operator, num2 = problem.split()
            num1_int = int(num1)
            num2_int = int(num2)
        except ValueError:
            return 'Error: Numbers must only contain digits.'

        if operator not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."
        
        if len(num1) > 4 or len(num2) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        dash_length = max(len(num1), len(num2)) + 2
        dashes.append('-' * dash_length)
        first_line.append(f'{num1:>{dash_length}}')
        second_line.append(f'{operator} {num2:>{dash_length - 2}}')
        
        if compute:
            if operator == '+':
                result = num1_int + num2_int
            else:
                result = num1_int - num2_int
            results.append(f'{result:>{dash_length}}')

    arranged_problems = '\n'.join(('    '.join(first_line),
                         '    '.join(second_line),
                         '    '.join(dashes)))
    if compute:
        arranged_problems = '\n'.join((arranged_problems, '    '.join(results)))
    return arranged_problems