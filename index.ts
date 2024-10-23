import express from "express";
import {Database} from "./modules/db";
import bodyParser from "body-parser";

// DB
export interface Action {
   id: number;
   title: string;
}

interface DB {
   actions?: Action[];
   messages?: any[];
   settings?: any[];
}

const initial: DB = { actions: [], messages: [], settings: [] };
const db = new Database<DB>("./data/db.json", initial);

const app = express();
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
   res.send('Test API');
});

app.get("/api/getActions", (req, res) => {
   res.json(db.data.actions);
});

app.get("/api/getMessages", (req, res) => {
   res.json(db.data.messages);
});

app.get("/api/getSettings", (req, res) => {
   res.json(db.data.settings)
});

app.post("/api/sendForm", async (req, res) => {
   console.log("* Form data");

   try {
      const formData = req.body;
      console.log(formData);
   } catch (e) {
      console.error(e);
   }

   res.send('OK');
})

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App listening on port ${port}`));