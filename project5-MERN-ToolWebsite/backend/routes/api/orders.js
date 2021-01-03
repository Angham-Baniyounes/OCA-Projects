const express = require("express");
const router = express.Router();
const Orders = require("../../models/orders");

router.get("/orders", function (req, res, next) {
  Orders.find((e, r) => {
    if (e) {
      console.log(e);
    } else {
      res.send(r);
    }
  });
}); //1

router.post("/orders", function (req, res, next) {
  const newData = new Orders(req.body);
  newData.save(function (err) {
    if (err) {
      res.send("data not saved");
      return handleError(err);
    }
  });
  res.send("data saved");
}); //2

// router.get("/orders/:id", function (req, res, next) {
//   const UserModel = mongoose.model(req.params.id, Orders);
//   UserModel.find((e, r) => {
//     if (e) {
//       console.log(e);
//     } else {
//       res.send(r);
//     }
//   });
// }); //3

router.post("/orders/:id", function (req, res) {
  const UserModel = mongoose.model(req.params.id, Orders);
  const newData = new UserModel(req.body);
  newData.save(function (err) {
    if (err) {
      res.send("data not saved");
      return handleError(err);
    }
  });
  res.send("data saved");
}); //4

router.put("/orders/:id", function (req, res) {
  Orders.updateOne(
    { _id: req.params.id },
    { quantity: req.body.quantity, size: req.body.size },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send("data updated");
      }
    }
  );
}); //5

router.delete("/orders/:id", function (req, res, next) {
  Orders.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("data delete");
    })
    .catch(function (error) {
      console.log(error);
    });
}); //6

router.route("/orders/:username").get((req, res) => {
  Orders.find({ username: req.params.username })
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error :" + err));
});

// router.get("/orders/:id", async (req, res) => {
//   try {
//     const post = await Orders.findById(req.params.id);
//     res.json(post);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
