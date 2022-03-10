import express, { Application } from "express";

const app: Application = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  return console.log(`Server is running in port: ${port}`)
}).on('error', (error) => {
  return console.error(`Error when trying to start the server: ${error}`)
})