const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./swagger");

const appFactory = require("./di");
const port = process.env.PORT || 3000;

function server() {
  const app = appFactory();

  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  app.listen(port, () => console.log(`listening on port ${port}`));
}

server();
