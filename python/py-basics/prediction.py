import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import datetime

# %matplotlib inline

# Tutorial: https://github.com/lxu213/credit-card-fraud-detection/blob/master/Predicting%20Credit%20Card%20Fraud.ipynb
# Data Set: https://www.kaggle.com/mlg-ulb/creditcardfraud

fraudData = pd.read_csv('data/creditcard.csv')
print(fraudData.head())
print(fraudData.shape)

# Fraud Info.
fraudData.describe()

# view features time, amount, class where transaction is fraudulent 
print(fraudData.loc[:10, ['Time','Amount','Class']].head())
print(fraudData.loc[fraudData['Class']==1, ['Time','Amount','Class']].head())


# group by fraud class: on average fraudulent charges are higher but is skewed by fewer, large transactions
print('mean',   fraudData.groupby(['Class']).mean()['Amount'])
print('median', fraudData.groupby(['Class']).median()['Amount'])


# distribution of transactions over time (seconds)
plt.plot(fraudData['Time'], fraudData['Amount'])
plt.show()
plt.plot(fraudData['Time'][:10], fraudData['Amount'][:10])
plt.show()


