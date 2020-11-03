import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress


def draw_plot():
    # Read data from file
    df = pd.read_csv('epa-sea-level.csv')

    # Create scatter plot
    fig, ax = plt.subplots(figsize=(20, 10))
    x = df['Year']
    y = df['CSIRO Adjusted Sea Level']
    plt.scatter(x, y)

    # Create first line of best fit
    slope, intercept, r_value, p_value, std_err = linregress(x, y)
    x_fit = pd.Series([*range(df['Year'][0], 2050)])
    y_fit = intercept + slope*x_fit
    plt.plot(x_fit, y_fit)

    # Create second line of best fit
    (slope,
     intercept,
     r_value,
     p_value,
     std_err) = linregress(df[df['Year'] >= 2000]['Year'],
                           df[df['Year'] >= 2000]['CSIRO Adjusted Sea Level'])
    x_fit_from_2000 = pd.Series([*range(2000, 2050)])
    y_fit_from_2000 = intercept + slope*x_fit_from_2000
    plt.plot(x_fit_from_2000, y_fit_from_2000, 'r')

    # Add labels and title
    plt.xlabel('Year')
    plt.ylabel('Sea Level (inches)')
    plt.title('Rise in Sea Level')

    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()
