import app from "./app/app";
import http from 'http'

const port = process.env.PORT || 2024;

const server = http.createServer(app)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
