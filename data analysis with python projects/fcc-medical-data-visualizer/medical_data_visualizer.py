import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Import data
df = pd.read_csv('medical_examination.csv')

# Add 'overweight' column
df['overweight'] = (df['weight'] / (df['height'] / 100)**2)\
                    .apply(lambda x: 0 if x <= 25 else 1)

# Normalize data by making 0 always good and 1 always bad. If the value of
# 'cholestorol' or 'gluc' is 1, make the value 0. If the value is more than 1,
# make the value 1.
df.loc[df['cholesterol'] == 1, 'cholesterol'] = 0
df.loc[df['cholesterol'] > 1, 'cholesterol'] = 1

df.loc[df['gluc'] == 1, 'gluc'] = 0
df.loc[df['gluc'] > 1, 'gluc'] = 1


# Draw Categorical Plot
def draw_cat_plot():
    # Create DataFrame for cat plot using `pd.melt` using just the values from 'cholesterol', 'gluc', 'smoke', 'alco', 'active', and 'overweight'.
    df_cat = pd.melt(df[['cholesterol',
                         'gluc',
                         'smoke',
                         'alco',
                         'active',
                         'overweight',
                         'cardio']], ['cardio'])


    # Group and reformat the data to split it by 'cardio'. Show the counts of each feature. You will have to rename one of the collumns for the catplot to work correctly.
    df_cat = df_cat.groupby(['cardio',
                             'variable',
                             'value'],
                            as_index=False).size().reset_index().rename(columns={0: 'total'})


    # Draw the catplot with 'sns.catplot()'
    sns.catplot(x='variable',
                y='total',
                kind='bar',
                data=df_cat,
                col='cardio',
                hue='value',
                height=8)


    # Do not modify the next two lines
    plt.savefig('catplot.png')
    return plt.gca().get_figure()


# Draw Heat Map
def draw_heat_map():
    # Clean the data
    df_heat = df[(df['ap_lo'] <= df['ap_hi'])
                 & (df['height'] >= df['height'].quantile(0.025))
                 & (df['height'] <= df['height'].quantile(0.975))
                 & (df['weight'] >= df['weight'].quantile(0.025))
                 & (df['weight'] <= df['weight'].quantile(0.975))]

    # Calculate the correlation matrix
    corr = np.corrcoef(df_heat, rowvar=False).round(1)

    # Generate a mask for the upper triangle
    mask = np.zeros_like(corr)
    mask[np.triu_indices_from(mask)] = True

    # Set up the matplotlib figure
    fig, ax = plt.subplots(figsize=(25, 15))

    # Draw the heatmap with 'sns.heatmap()'
    ax = sns.heatmap(corr, mask=mask,
                     center=0, fmt='.1f',
                     square=True, annot=True,
                     xticklabels=df_heat.columns, yticklabels=df_heat.columns)


    # Do not modify the next two lines
    fig.savefig('heatmap.png')
    return fig
