import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
const apiUrl = process.env.API_URL;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/test", async (req, res) => {
  try {
    const result = await axios.get(apiUrl + "/static");
    const earthquakeData = result.data;

    res.render("index.ejs", { data: earthquakeData });
  } catch (error) {
    console.log("Failed to make request: ", error.message);
    res.render("index.ejs", { error: error.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(apiUrl + "/dynamic");
    const earthquakeData = result.data;

    res.render("index.ejs", { data: earthquakeData });
  } catch (error) {
    console.log("Failed to make request: ", error.message);
    res.render("index.ejs", { error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
