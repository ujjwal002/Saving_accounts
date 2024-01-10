import { NextResponse } from "next/server";
import { useRouter } from "next/dist/client/router";
export function middleware() {
  const router = useRouter;
  return NextResponse.json({
    hello: "hello middle ware",
  });
 
}
