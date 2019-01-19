const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Server
app.use(express.static("client/build"));
app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(
        `==> Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
      );
});
