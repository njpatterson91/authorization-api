const router = require("express").Router();
const restricted = require("../middleware/restricted");
const bcryptjs = require("bcryptjs");
const makeToken = require("../middleware/makeToken");
const UserModel = require("./users-model")

router.post("/register", (req, res) => {
  const credentials = req.body;

  const hash = bcryptjs.hashSync(credentials.password, 10);
  credentials.password = hash;

  UserModel.create(credentials)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.post("/login", (req, res) => {
  UserModel.getByUsername(req.body.username)
    .then((user) => {
      if (bcryptjs.compareSync(req.body.password, user[0].password)) {
        const token = makeToken(user[0]);
        res.status(200).json({
          message: "Welcome to our API, " + user[0].username,
          token,
        });
      } else {
        res.status(401).json("invalid credentials");
      }
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.put("/password", restricted, (req, res) => {
  const credentials = req.body;

  const hash = bcryptjs.hashSync(credentials.password, 10);
  credentials.password = hash;
  UserModel.update(req.decodedToken.id, credentials)
    .then((data) => {
      res.status(200).json({ Message: "Password updated successfully!" });
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
