import joblib
import pandas as pd
import json

# Load trained model
model = joblib.load(
    "models/demand_forecast_model.pkl"
)

future_data = pd.DataFrame({

    "UnitPrice": [1999],
    "Month": [12],
    "Day": [15],
    "Hour": [18]

})

prediction = model.predict(future_data)

result = {

    "predicted_demand":
    float(prediction[0]),

    "alert":
    "High Demand"

    if prediction[0] > 20

    else "Demand Normal"

}

print(json.dumps(result))