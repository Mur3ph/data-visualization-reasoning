import pandas
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import numpy as np
import math
from statsmodels.tsa.stattools import acf, pacf
import statsmodels.tsa.stattools as ts
from statsmodels.tsa.arima_model import ARIMA

# Tutorial on Time Series with ARIMA: https://machinelearningmastery.com/arima-for-time-series-forecasting-with-python/

variables = pandas.read_csv('data/AirPassengers.csv')
print(variables.head())

variables.plot()
plt.show()