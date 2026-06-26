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
    const { from, to, date } = req.body;

    if (!from || !to || !date) {
        return res.json({
            message: "All fields required ❌"
        });
    }

    res.json({
        message: "Trip planned successfully ✅",
        trip: {
            from,
            destination: to,
            date,
            suggestion: "Pack light and carry ID proof 🧳"
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
