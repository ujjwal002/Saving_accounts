import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../../db.connect";
import { UserModel } from "../../../../../models/user.model";
const bcrypt = require("bcrypt");
export async function GET(request: NextRequest) {
  const { email, password } = await request.json();
  const user = UserModel.findOne({ email });
  console.log(user);

  return NextResponse.json({
    data: "hello data",
  });
}

export async function POST(request: NextRequest) {
  try {
    const dbConnection = connect();
    const { email, password } = await request.json();
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }
    // const passwordMatch = await new Promise<boolean>((resolve) => {
    //   bcrypt.compare(password, user.password, (err: Error, result: boolean) => {
    //     if (err) {
    //       resolve(false);
    //     }
    //     resolve(result);
    //   });
    // });
    const passwordMatch: boolean = await bcrypt.compare(
      password,
      user.password
    );

    if (passwordMatch) {
      return NextResponse.json({
        success: true,
        message: "Login successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Invalid password",
      });
    }
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
