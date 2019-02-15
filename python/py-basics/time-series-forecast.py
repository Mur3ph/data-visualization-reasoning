import pandas
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import numpy as np
import math
from statsmodels.tsa.stattools import acf, pacf 
import statsmodels.tsa.stattools as ts
from statsmodels.tsa.arima_model import ARIMA
import pandas as pd
from pandas.plotting import autocorrelation_plot
import matplotlib.pyplot as plt
from pandas import datetime
import time

# Tutorial on Time Series with ARIMA: https://machinelearningmastery.com/arima-for-time-series-forecasting-with-python/

variables = pandas.read_csv('data/AirPassengers.csv')
print(variables.head())

# variables.plot()
# plt.show()

dr = pd.date_range(start='1984-01-01', end='1984-12-31')
df = pd.DataFrame(np.arange(len(dr)), index=dr, columns=["Values"])

autocorrelation_plot(df)
plt.show()