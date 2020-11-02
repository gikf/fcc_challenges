import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()


# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
def read_data(filename):
    return pd.read_csv(
        filename,
        parse_dates=['date'],
        index_col='date')
df = read_data('fcc-forum-pageviews.csv')


# Clean data
def clean_data(df):
    return df[(df['value'] >= df['value'].quantile(0.025))
         & (df['value'] <= df['value'].quantile(0.975))]
df = clean_data(df)


def draw_line_plot():
    # Draw line plot
    fig, ax = plt.subplots(figsize=(18, 6))
    ax.plot(df, 'red')
    ax.set_title('Daily freeCodeCamp Forum Page Views 5/2016-12/2019', size=20)
    ax.set_xlabel('Date', size=18)
    ax.set_ylabel('Page Views', size=18)

    # Save image and return fig (don't change this part)
    fig.savefig('line_plot.png')
    return fig


def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    df_bar = df.copy()
    df_bar.reset_index(inplace=True)
    df_bar['year'] = [d.year for d in df_bar.date]
    df_bar['month'] = [d.month_name() for d in df_bar.date]

    df_bar = df_bar.groupby(
        ['year', 'month'],
        as_index=False).mean().rename(
            columns={'year': 'Years',
                     'month': 'Months',
                     'value': 'Average Page Views'})

    # Draw bar plot
    fig, ax = plt.subplots(figsize=(20, 10))
    ax = sns.barplot(x='Years',
                     y='Average Page Views',
                     data=df_bar,
                     hue='Months',
                     hue_order=['January', 'February', 'March', 'April', 'May',
                                'June', 'July', 'August', 'September',
                                'October', 'November', 'December'])

    # Save image and return fig (don't change this part)
    fig.savefig('bar_plot.png')
    return fig


def draw_box_plot():
    # Prepare data for box plots (this part is done!)
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]

    # Draw box plots (using Seaborn)
    fig, (ax1, ax2) = plt.subplots(figsize=(20, 10), ncols=2)
    plt.subplot(121)
    ax1 = sns.boxplot(x='year',
                      y='value',
                      data=df_box)
    ax1.set_title('Year-wise Box Plot (Trend)')
    ax1.set_xlabel('Year')
    ax1.set_ylabel('Page Views')
    plt.subplot(122)
    ax2 = sns.boxplot(x='month',
                      y='value',
                      order=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                             'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      data=df_box)
    ax2.set_title('Month-wise Box Plot (Seasonality)')
    ax2.set_xlabel('Month')
    ax2.set_ylabel('Page Views')

    # Save image and return fig (don't change this part)
    fig.savefig('box_plot.png')
    return fig
