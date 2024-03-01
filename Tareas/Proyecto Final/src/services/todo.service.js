import TodoModel from "../models/todo.model.js";

class TodoService {
  constructor() {
    this.todoModel = new TodoModel();
  }

  async createTodo(req) {
    const { title, description } = req.body;

    if (!(title && description)) {
      return {
        statusCode: 400,
        message: "Please provide all params",
      };
    }

    const response = await this.todoModel.createTodo(
      { title, description },
      req.user
    );

    return { statusCode: 200, todo: response };
  }

  async getAllTodos(req) {
    const userId = req.user["user_id"];

    if (userId) {
      const todos = await this.todoModel.findAllTodos(userId);
      return { statusCode: 200, todos };
    } else {
      return { statusCode: 400, message: "UserId was not provided" };
    }
  }

  async getTodo(req) {
    const { todoId } = req.body;
    if (todoId) {
      const todo = await this.todoModel.findTodo(todoId);
      return { statusCode: 200, todo };
    } else {
      return { statusCode: 400, message: "TodoId was not provided" };
    }
  }

  //Actividad CRUD (Create, Read, Update, Delete)

  async updateTodo(req) {
    const { todoId } = req.body;
    const { title, description } = req.body;
    if (todoId){
      if(title && description){
      const response = await this.todoModel.updateTodo(todoId,
          { title, description },
          req.user
        );
      return {statusCode:200, todo:response};
      }else{
        return {
          statusCode: 400,
          message: "Please provide all params",
        };
      }
    }else{
      return { statusCode: 400, message: "TodoId was not provided" };
    }
  }

  async deleteTodo(req) {
    const { todoId } = req.body;
    if (todoId) {
      const result = await this.todoModel.deleteTodo(todoId);
      return { statusCode: 200, result};
    } else {
      return { statusCode: 400, message: "TodoId was not provided" };
    }
  }
}

export default TodoService;
