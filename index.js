const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.get("/kyiv/kashtan", (req, res) => {
    res.send("Kashtan")
})

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    console.log(process.env); 
});