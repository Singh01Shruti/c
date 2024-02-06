import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    
        await client.connect;
        const insertQuery = 'INSERT INTO users (username, password, name) VALUES ($1, $2, $3)'
        let response = await client.query(insertQuery, [username, password, name]);
        return response.rows[0]; 
}
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    await client.connect;
    const getQuery = 'SELECT * FROM user WHERE user_id = $1'
    let response = await client.query(getQuery, [userId]);
    return response.rows;
}
