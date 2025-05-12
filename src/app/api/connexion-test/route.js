import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server"; // Important!

export async function GET() {
  try {
    // Try to connect to the database
    await connectToDB();
    // If successful, return a success message
    return NextResponse.json({ message: "Connected to MongoDB successfully!" });
  } catch (error) {
    // If there is an error, return an error message
    console.error(error);

    // Ensure a response is always returned in the error case
    return NextResponse.json(
      {
        message: "Failed to connect to MongoDB",
        error: error.message,
      },
      { status: 500 }
    ); // Status code set to 500 for internal error
  }

  // Fallback response in case no error occurs but no valid response has been returned.
  // return NextResponse.json(
  //   { message: "Unexpected behavior." },
  //   { status: 500 }
  // );
}
