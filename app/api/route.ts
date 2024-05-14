import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const referral_id = url.searchParams.get("referral_id");

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  };

  try {
    if (referral_id) {
      cookies().set("cupidai-ref-id", referral_id, { httpOnly: true });

      const response = await fetch(`http://localhost:8000/referral/link-clicked?referral_id=${referral_id}`, requestOptions);
      const responseData = await response.json();
  
      if (response.status === 200) {
        return responseData;
      } else {
        throw new Error(response.statusText); // TODO: we need to handle this error on the client side
      }
    }
  } catch (error: any) {
    console.error('Error while getting product list:', error.message); // TODO: we need to handle this error on the client side
  }
}