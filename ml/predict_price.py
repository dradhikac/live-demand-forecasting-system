import joblib
import pandas as pd
import json
import sys
import os

# Absolute model path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(
    BASE_DIR,
    "models",
    "dynamic_price_model.pkl"
)

# Load trained model
model = joblib.load(model_path)

# Inputs from backend
month_number = int(sys.argv[1])
demand_score = int(sys.argv[2])

# Future prediction data
future = pd.DataFrame({

    "month_number": [month_number],

    "demand_score": [demand_score]

})

# Predict price
prediction = model.predict(future)

result = {

    "predicted_price":
    round(float(prediction[0]), 2)

}

print(json.dumps(result))