const appFactory = require("./di");
const port = process.env.PORT || 3000;

function server() {
  const app = appFactory();

  app.listen(port, () => console.log(`listening on port ${port}`));
}

server();
