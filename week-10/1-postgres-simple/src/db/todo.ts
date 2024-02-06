import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await client.connect();
    const insertQuery = 'INSERT INTO todos (userId, title, description) VALUES ($1,$2,$3)'
    let response = await client.query(insertQuery, [userId,title,description]);
    return response.rows;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await client.connect();
    const updateQuery = 'UPDATE todos SET done = true WHERE todo_id = $1'
    let response = await client.query(updateQuery, [todoId]);
    return response.rows;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    await client.connect();
    const getQuery = 'SELECT * FROM todos WHERE user_id = $1'
    let response = await client.query(getQuery, [userId]);
    return response.rows;
}