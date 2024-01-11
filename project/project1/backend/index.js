const { todo } = require("./db");
const { createTodo, updateTodo } = require("./type");

const express = require('express');
const cors = require('cors')

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(403).json({
            msg: "You have given wrong input"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Task Created"
    })
})


app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedUpdatedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedUpdatedPayload.success) {
        res.status(403).json({
            msg: "You have given wrong input"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },
        {
            completed: true
        })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);