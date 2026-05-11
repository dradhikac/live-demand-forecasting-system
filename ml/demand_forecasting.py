import pandas as pd

from sklearn.linear_model import LinearRegression

data = pd.read_csv("sales_data.csv")

print(data.head())

print(data.isnull().sum())

data = data.dropna()

X = data[["views", "price"]]

y = data["sales"]

model = LinearRegression()

model.fit(X, y)

future_prediction = model.predict([[4500, 1899]])

print("Predicted Sales:", future_prediction)