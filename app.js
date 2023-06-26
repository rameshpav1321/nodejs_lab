const readline = require("readline");
// ***reading from and writing to terminal***
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please enter your name: ", (name) => {
//   console.log("You entered: " + name);
//   rl.close();
// });
// rl.on("close", () => {
//   console.log("Interface closed");
//   process.exit();
// });
const fs = require("fs");
// ***reading from and writing to file***
// const textIn = fs.readFileSync(__dirname + "/files/sample.txt", "utf-8");
// console.log(textIn);
// fs.appendFileSync(
//   __dirname + "/files/sample.txt",
//   "This is sample data being written to file..."
// );
const http = require("http");
const url = require("url");
// ***create a simple web server***
let html = fs.readFileSync("/dummypath", "utf-8");
const server = http.createServer((req, res) => {
  console.log("created a simple server");

  // let path = req.path;
  let { query, pathname: path } = url.parse(req.path);
  if (path == "/" || path.tolocaleLowerCase() == "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hellooo",
    });
    res.end(html.replace("{{%CONTENT%}}", "Its home page"));
  } else if (path.tolocaleLowerCase() == "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hellooo",
    });
    res.end(html.replace("{{%CONTENT%}}", "Its contact page"));
  } else if (path.tolocaleLowerCase() == "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hellooo",
    });
    res.end(html.replace("{{%CONTENT%}}", "Its about page"));
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "hellooo",
    });
    res.end(html.replace("{{%CONTENT%}}", "Its error page"));
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server has started");
});
