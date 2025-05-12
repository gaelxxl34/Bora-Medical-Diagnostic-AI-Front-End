import { connectToDB } from "@/lib/utils";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

//get all users (POST)
export async function GET() {
  try {
    connectToDB();
    const users = await User.find();
    return NextResponse.json({
      message: "success",
      data: users,
    });
  } catch (error) {
    console.error(error);

    // Ensure a response is always returned in the error case
    return NextResponse.json(
      {
        message: "Failed to fetch data",
        // error: error.message,
        status: 500,
      },
      { status: 500 }
    );
  }
}

// Create a new user (POST)
export async function POST(req) {
  try {
    const { firstname, lastname, email, profession } = await req.json();

    // Ensure required fields are provided
    if (!firstname || !lastname || !email || !profession) {
      return NextResponse.json(
        { message: "Required fields could not be empty" },
        { status: 400 }
      );
    }

    // Create a new user document
    connectToDB();
    const newUser = new User({ firstname, lastname, email, profession });
    // Save the new user to the database
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", userId: newUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to create user",
      error: error.message,
      status: 500,
    });
  }
}
