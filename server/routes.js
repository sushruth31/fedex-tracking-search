const fs = require("fs");
module.exports = app => {
  app.get("/api/search/:searchparam/", (req, res) => {
    const { searchparam } = req.params;
    let { offset } = req.params;
    offset = parseFloat(offset);
    const data = JSON.parse(fs.readFileSync("data.json"))
      .filter(({ id }) => String(id).includes(searchparam))
      .slice(0, 7);

    res.json(data);
  });
};
