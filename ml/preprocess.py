import pandas as pd

# Load dataset
data = pd.read_csv("datasets/online_retail.csv", encoding="latin1")

print("Dataset Loaded")
print(data.head())

# Remove missing values
data = data.dropna()

# Remove cancelled orders
data = data[~data["InvoiceNo"].astype(str).str.contains("C")]

# Remove negative quantities
data = data[data["Quantity"] > 0]

# Remove zero/negative prices
data = data[data["UnitPrice"] > 0]

# Create total price column
data["TotalPrice"] = data["Quantity"] * data["UnitPrice"]

# Convert date column
data["InvoiceDate"] = pd.to_datetime(data["InvoiceDate"])

# Extract useful features
data["Month"] = data["InvoiceDate"].dt.month
data["Day"] = data["InvoiceDate"].dt.day
data["Hour"] = data["InvoiceDate"].dt.hour

print("\nCleaned Dataset")
print(data.head())

# Save cleaned dataset
data.to_csv("outputs/cleaned_data.csv", index=False)

print("\nCleaned dataset saved")