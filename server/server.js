const mongoose = require("mongoose");
const signale = require("signale");

const app = require("./app");

app.listen("1234", () => signale.success(`server started 1234`));

mongoose
  .connect(
    "mongodb+srv://tuv361089:PIH3NDHjTEBeFy2g@cluster0.tp7sqrb.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => signale.success("mongoDB connected"))
  .catch((err) => signale.error(err));
