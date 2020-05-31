import numpy as np

def calculate(input_list):
    if len(input_list) < 9:
        raise ValueError('List must contain nine numbers.')
    
    matrix = np.array(input_list).reshape(3, 3)
    
    calculations = {'mean': [],
                    'variance': [],
                    'standard deviation': [],
                    'max': [],
                    'min': [],
                    'sum': []}
    
    function_to_key = {matrix.mean: 'mean',
                       matrix.var: 'variance',
                       matrix.std: 'standard deviation',
                       matrix.max: 'max',
                       matrix.min: 'min',
                       matrix.sum: 'sum'}
    
    axis_settings = [0, 1, None]

    for function, key_name in function_to_key.items():
        for axis in axis_settings:
            calculations[key_name].append(function(axis=axis).tolist())
    
    return calculations
