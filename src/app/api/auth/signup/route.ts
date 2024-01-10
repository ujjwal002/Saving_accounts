import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../../db.connect";
import { UserModel } from "../../../../../models/user.model";
const bcrypt = require("bcrypt");

export async function POST(request: NextRequest) {
  try {
    const dbConnection = connect();
    const { email, password } = await request.json();
    
    const user = await UserModel.findOne({ email });
    console.log(user);
    
    if (user) {
      return NextResponse.json({
        success: false,
        message: "User already exist",
      });
    }
    const hashPassword =await bcrypt.hash(password,10);
    const response = await UserModel.create({ email, password:hashPassword });
    if (response) {
      return NextResponse.json({
        data: "User data successfully received",
        email,
        password,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
