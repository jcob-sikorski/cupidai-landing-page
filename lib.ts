"use server";

import { Passions_Conflict } from "next/font/google";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type FormState = {
  message: string;
}

export async function onSignUp(prevState: FormState, data: FormData): Promise<{ message: string }> {
  console.log("ACTIVATED SIGNUP")
  const username = data.get("username")?.toString() ?? '';
  const email = data.get("email")?.toString() ?? '';
  const password = data.get("password")?.toString() ?? '';

  console.log(username);
  console.log(email);
  console.log(password);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    },
    body: new URLSearchParams({
      'email': email,
      'username': username,
      'password': password,
      'grant_type': '',
      'scope': '',
      'client_id': '',
      'client_secret': ''
    }).toString()
  };
  
  try {
    const response = await fetch(`http://localhost:8000/account/signup?email=${encodeURIComponent(email)}`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      // Successfully signed up
      const jwt = responseData.access_token;
      cookies().set("cupidai-session", jwt, { httpOnly: true });
    } else if (response.status === 401 || response.status === 404) {
      // User already exists
      throw new Error(responseData.detail);
    } else {
      // Handle other error cases
      throw new Error(response.statusText);
    }
  } catch (error: any) {
    // Handle network errors or other exceptions
    console.error('Error signing up:', error.message);

    return {
      message: error.message
   }
  }
  return {
    message: 'success'
 }
}




export async function login(formData: FormData) {
  const user = { 
    username: formData.get("username"), 
    password: formData.get("password") 
  };

  const jwt = ""; // TODO: get the jwt from the backend server based on the logged in user

  cookies().set("cupidai-session", jwt, { httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("cupidai-session", "", {});
}

export async function getSession() {
  const session = cookies().get("cupidai-session")?.value;
  if (!session) return null;
  // return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("cupidai-session")?.value;
  if (!session) return;

  const jwt = ""; // TODO: get the jwt from the backend server

  const res = NextResponse.next();
  res.cookies.set({
    name: "cupidai-session",
    value: jwt,
    httpOnly: true,
  });
  return res;
}
