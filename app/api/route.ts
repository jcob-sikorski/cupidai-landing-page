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
      const response = await fetch(`${process.env.BACKEND_DOMAIN}/referral/link-clicked?referral_id=${referral_id}`, requestOptions);
  
      if (response.status === 201) {
        cookies().set({
          name: "cupidai-ref-id",
          value: referral_id,
          httpOnly: true
        });
        // // Return the modified response object
        return response;
      } else {
        throw new Error(response.statusText); // TODO: we need to handle this error on the client side
      }
    }
  } catch (error: any) {
    console.error('Error while getting product list:', error.message); // TODO: we need to handle this error on the client side
  }
}
