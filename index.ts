import express from "express";
import bodyParser from "body-parser";
import {mockDB, Action, Message, Settings} from './mockData';

const app = express();

// CORS middleware
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
   next();
});

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/api", (req, res) => {
   res.json({ message: 'API is working' });
});

app.get("/api/getActions", (req, res) => {
   const actions: Action[] = mockDB.actions;
   res.json(actions);
});

app.get("/api/getMessages", (req, res) => {
   const messages: Message[] = mockDB.messages;
   res.json(messages);
});

app.get("/api/getSettings", (req, res) => {
   const settings: Settings = mockDB.settings;
   res.json(settings);
});

app.post("/api/sendForm", async (req, res) => {
   try {
      const formData = req.body;
      console.log("Form data received:", formData);
      res.json({ success: true, data: formData });
   } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
   }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
   const port = process.env.PORT || 3333;
   app.listen(port, () => console.log(`App listening on port ${port}`));
}

// Export for Vercel
export default app;