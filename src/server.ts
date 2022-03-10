import express, { Application } from "express";

const app: Application = express();
const port = process.env.PORT 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
    // console.error(`Error: ${error.message}`);
}
