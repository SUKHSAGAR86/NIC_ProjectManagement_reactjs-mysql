
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Sagar@123",
  database: process.env.DB_NAME || "nic_projectmanagement",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Convert pool to use promises
const promisePool = pool.promise();

// Test database connection
export const testConnection = async () => {
    try {
        const connection = await promisePool.getConnection();
        console.log('Database connection successful!');
        connection.release();
        return true;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        return false;
    }
};


export default promisePool;
