const app = require("./src/app");
const {connectDB}  = require("./src/config/database")
require("dotenv").config();
const port = process.env.PORT || 6800;

app.listen(port, "0.0.0.0", async() => {
    await connectDB();
    console.log(`Server running on port ${port}`);
});


