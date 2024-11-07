import mongoose from "mongoose";
import pkg from 'pg';
const { Pool } = pkg;

export const connectDatabase = () => {
    const dbUrl = process.env.dbUrl;
    mongoose.connect(dbUrl);
    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB");
    })

    connection.on("open", () => {
        console.log("Conectado com o mongoDB");
    })

}

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "comida",
    password: "2511",
    port: 5432,
});
