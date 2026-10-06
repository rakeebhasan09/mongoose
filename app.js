import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Express and mongoose server!",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
