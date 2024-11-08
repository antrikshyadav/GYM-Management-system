const express = require("express");
const app = express();
const cors = require("cors");
const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = admin.firestore();

app.post("/create", async (req, res) => {
  try {
    const id = req.body.email;
    const userJson = {
      role: req.body.role,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await db.collection("gymusers").doc(id).set(userJson);
    res.send(console.log(user));
  } catch (error) {
    res.send(error);
  }
});

app.get("/read", async (req, res) => {
  try {
    const userRef = db.collection("users");
    const response = await userRef.get();
    let resposnseArray = [];
    response.forEach((doc) => {
      resposnseArray.push(doc.data());
    });
    res.send(resposnseArray);
  } catch (error) {
    res.send(error);
  }
});

app.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const usersRef = db.collection("users").doc(id);
    const response = await usersRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    newname = "updated";
    const userRef = await db
      .collection("users")
      .doc(id)
      .update({ name: newname });
    res.send(userRef);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await db.collection("users").doc(id).delete();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
