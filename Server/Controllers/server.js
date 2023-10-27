const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db');


app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM blogs_table');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/User', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM user_table');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.post("/Signup", async (req, res) => {
    const { first_name, last_name, username, email, phone_number, password } = req.body;
    try {
        const checkEmailQuery = "SELECT user_id FROM user_table WHERE email = $1";
        const emailCheck = await db.query(checkEmailQuery, [email]);

        if (emailCheck.rows.length > 0) {
            res.status(400).json({ error: "Email already exists" });
        }
        else {
            const query = `insert into user_table (first_name, last_name,username,email,phone_number,password)
          values ($1, $2, $3, $4 , $5, $6)
          returning user_id`
                ;
            const values = [first_name, last_name, username, email, phone_number, password];
            const user = await db.query(query, values);
            res.status(200).json({
                message: "Added Successfully",
                user_id: user.rows.user_id
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to add");
    }
});



app.post("/Login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkemail = `select user_id from user_table where email = $1`;
        const checked = await db.query(checkemail, [email]);

        const checkpass = `select user_id from user_table where password = $1`;
        const checkedpass = await db.query(checkpass, [password]);
        console.log();

        if (checked.rows.length === 0 || checkedpass.rows.length === 0) {
            res.status(400).json({ error: "Invalid Email or Password" });
        } else {
            res.redirect("/");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to Authenticate");
    }
});



app.post("/BlogPost", async (req, res) => {
    const { title, city, details } = req.body;
    try {
        const query = `insert into blogs_table (title, city, details)
          values ($1, $2, $3)
          returning id`;

        const values = [title, city, details];
        const blog = await db.query(query, values);
        res.status(200).json({
            message: "Blog Added Successfully",
            id: blog.rows.id
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to add blog");
    }
});

app.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const query = "select * from blogs_table where id = $1";
        const blog = await db.query(query, [id]);
        if (blog.rows.length === 0) {
            res.status(404).send("Blog not found");
        } else {
            res.json(blog.rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Wrong server Id");
    }
});


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

