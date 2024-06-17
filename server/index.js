// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(9000, () => {
//   console.log("Server listening on port 9000");
// });

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "@/App";

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  // const app = ReactDOMServer.renderToString(React.createElement(App));
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="/assets/index-BZYBC-cf.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
