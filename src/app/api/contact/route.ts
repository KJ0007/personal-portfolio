import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create a connection to the database
    const connection = await mysql.createConnection(dbConfig)

    // Insert the form data into the database
    const [result] = await connection.execute(
      "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)",
      [name, email, message],
    )

    // Close the database connection
    await connection.end()

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "An error occurred while submitting the form" }, { status: 500 })
  }
}

