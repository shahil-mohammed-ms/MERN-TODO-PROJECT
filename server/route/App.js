const express = require('express');
const router = express.Router();
const todo = require('../src/db/Schema/TodoSchema')


router.get('/', async (req, res) => {
  try {
    const todos = await todo.find();

    res.json(todos);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  const todoSave = new todo({
    title: req.body.title,
    completed: false
  });

  try {
   await  todoSave.save();
    res.status(200).json({ message: 'Todo saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving todo' });
  }
});


router.post('/completed',async(req,res)=>{
  
  try {
   await todo.findByIdAndUpdate(
      req.body.id, // ID of the document to update
      { completed: req.body.completed }
    )
      .then(updatedTodo => {
        res.status(200).json({ message: updatedTodo });
      })
      .catch(error => {
        console.error(error);
      });
   
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error completed status todo' });
   }
})

module.exports = router;