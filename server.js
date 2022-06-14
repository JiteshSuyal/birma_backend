/**========================================================================
 * *                                INFO
 *   # Birma-Backend APIs
 *   # Git-Repo : https://github.com/kartikey29/birma_backend/tree/master
 * 	 # Start Server : npm run dev
 *
 *========================================================================**/

/**======================
 *!    Importing Files
 *========================**/
const express = require("express");
const app = express();
const cors = require("cors");
const favicon = require("serve-favicon");
const morgan = require("morgan");
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
const path = require("path");

// Environment Path
require("dotenv").config({ path: "./config.env" });

// Routes

// Sessions
// const sess = {
// 	secret: "No One KNOWS",
// 	cookie: {},
// 	secret: "keyboard cat",
// 	resave: false,
// 	saveUninitialized: true,
// 	maxAge: 36000000, // 10hrs
// };
// if (app.get("env") === "production") {
// 	app.set("trust proxy", 1); // trust first proxy
// 	sess.cookie.secure = true; // serve secure cookies
// }

// Environment Variable
const port = process.env.PORT;

// Database Connection
require("./src/db/connection");

// Middleware
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
// app.use(cookieParser());
// app.use(session(sess));

// Calling Routes

//Restrict Invalid Routes
app.get("*", (req, res) => {
	console.log("Invalid Page Request");
	res
		.send("<h1><i><strong> ( 404 ) Page Not Found , Invalid page request")
		.status(400);
});

/**========================================================================
 *                           Listening Port at 3000
 *========================================================================**/
app.listen(port, () => {
	console.log(`server is starting on port ${port}`);
});