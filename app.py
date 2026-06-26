from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Travel Planner Backend is Running!"

@app.route("/plan-trip", methods=["POST"])
def plan_trip():
    data = request.json

    destination = data.get("destination")
    days = data.get("days")

    # SIMPLE LOGIC (you can upgrade later)
    result = f"Trip planned to {destination} for {days} days ✈️"

    return jsonify({"message": result})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
