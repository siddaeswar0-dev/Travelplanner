const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Travel Planner Backend is Running 🚀");
});

// Trip planning API
app.post("/plan-trip", (req, res) => {
    const { place, date, people } = req.body;

    if (!place || !date || !people) {
        return res.json({ message: "All fields required ❌" });
    }

    const response = {
        message: "Trip planned successfully ✅",
        trip: {
            place,
            date,
            people,
            suggestion: "Pack light and carry ID proof 🧳"
        }
    };

    res.json(response);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
