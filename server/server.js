import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "History Quest API is running!"
    });
});

app.listen(PORT, () => {
    console.log(`History Quest API running at http://localhost:${PORT}`);
});