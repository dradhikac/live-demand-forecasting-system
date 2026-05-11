import pandas as pd

from sklearn.linear_model import LinearRegression

import joblib

# Load dataset
data = pd.read_csv(
    "datasets/product_price_history.csv"
)

# Features
X = data[[
    "month_number",
    "demand_score"
]]

# Target
y = data["price"]

# Train model
model = LinearRegression()

model.fit(X, y)

# Save trained model
joblib.dump(
    model,
    "models/dynamic_price_model.pkl"
)

print("Dynamic price model trained")