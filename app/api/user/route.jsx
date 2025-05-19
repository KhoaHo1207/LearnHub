import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name } = body;

    // Kiểm tra dữ liệu đầu vào
    if (!email || !name) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and name are required",
        },
        { status: 400 }
      );
    }

    // Kiểm tra người dùng đã tồn tại chưa
    const existingUsers = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUsers.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 } // Conflict
      );
    }

    // Chèn người dùng mới
    const insertedUsers = await db
      .insert(usersTable)
      .values({ name, email })
      .returning();

    return NextResponse.json(
      {
        success: false,
        message: "User created successfully",
        user: insertedUsers[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
