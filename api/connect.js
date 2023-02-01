import mysql from "mysql"

export const db = mysql.createConnection( {
    host: "localhost",
    user:"root",
    password:"Arnold994.",
    database:"social"
})