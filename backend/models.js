const mongoose =  require('mongoose');

const TaskSchema = new mongoose.Schema({
    id: { type: Number,unique:true},
    name:{type:String, default:"Task 1"},
    description:{type:String, default:"Sample Description"},
    createdAt:{type:String, default:new Date().toLocaleDateString("en-US", options)},
    deadline:{type:String, default:new Date(now.getTime() + 24 * 60 * 60 * 1000).toLocaleDateString("en-US", options)},
    completed:{type:Boolean, default:"false"},
} )

TaskSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next();
    }

    const lastTask = await Todo.findOne().sort({ id: -1 });

    if (lastTask) {
        this.id = lastTask.id + 1;
    } else {
        this.id = 1;
    }

    next();
});



const Todo = mongoose.model("TodoList",TaskSchema);
module.exports = Todo;

