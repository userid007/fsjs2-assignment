import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import axios from "axios";
import { swaggerDocument } from "./config/swagger.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui.min.css",
  })
);

app.get("/", async (_req, res) => {
  res.send("Hello there - API");
});

app.get("/post", async (_req, res) => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.status(200).json(data.data.splice(0, 20));
});

app.all("*", async (_req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
