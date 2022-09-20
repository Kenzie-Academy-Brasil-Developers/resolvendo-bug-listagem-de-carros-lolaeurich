import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const port = 3001

const cars = [];

app.post("/cars", (request, response) => {
  const { model, brand, year, color, plate } = request.body;

  cars.push({
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  });

  return response.status(201).send();
});

app.get("/cars", (request, response) => {
  return response.json(cars);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
});
