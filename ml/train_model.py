import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

import joblib

# Load cleaned dataset
data = pd.read_csv("outputs/cleaned_data.csv")

# Select features
X = data[["UnitPrice", "Month", "Day", "Hour"]]

# Target column
y = data["Quantity"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(

    X,
    y,
    test_size=0.2,
    random_state=42

)

# Create model
model = RandomForestRegressor()

# Train model
model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)

# Accuracy check
error = mean_absolute_error(y_test, predictions)

print("Mean Absolute Error:", error)

# Save trained model
joblib.dump(model, "models/demand_forecast_model.pkl")

print("Model Saved Successfully")