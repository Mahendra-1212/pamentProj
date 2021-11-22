const express = require("express");
const Razorpay = require("razorpay");
const app = express();
const path = require("path");
const publicpath = path.join(__dirname, "public");
app.use(express.static(publicpath));
app.use(express.json());

app.post("/dopayment",async (req, res) => {
const {amount}=JSON.parse(JSON.stringify(req.body));
    var instance = new Razorpay({ key_id: 'rzp_test_LNmFKL6qBfSGpK', key_secret: 'tZODlycuGfzj9SxWeKAlqYtD' })
const options={
    amount: amount*100,
    currency: "INR",
    receipt: "receipt#1"
  };
const myorder= await instance.orders.create(options);

res.status(200).json({
    success:true,
    order:myorder
});
//instance.orders.create({ amount: 50000, currency: "INR", receipt: "receipt#1", notes: { key1: "value3", key2: "value2" } })
});
app.get("/*", (req, res) => {
    console.log("get request hitted");
    res.send("this server is working");
})
app.listen(4000, () => {
    console.log("server running at port 4000");
});