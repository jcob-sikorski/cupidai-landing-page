"use server";

import { cookies } from "next/headers";

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
      'username': username,
      'password': password,
      'grant_type': '',
      'scope': '',
      'client_id': '',
      'client_secret': ''
    }).toString()
  };
  
  try {
    let url = "";
    
    const referral_id = cookies().get("cupidai-ref-id")?.value;

    if (referral_id) {
      url = `${process.env.BACKEND_DOMAIN}/account/signup-ref?email=${encodeURIComponent(email)}&referral_id=${encodeURIComponent(referral_id)}`;
    } else {
      url = `${process.env.BACKEND_DOMAIN}/account/signup?email=${encodeURIComponent(email)}`;
    }

    const response = await fetch(url, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      // Successfully signed up
      const jwt = responseData.access_token;
      cookies().set("cupidai-session", jwt, { secure: true, httpOnly: true, sameSite: false, domain: '.cupidai.tech' });
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

export async function onLogIn(prevState: FormState, data: FormData): Promise<{ message: string }> {
  console.log("ACTIVATED LOGIN")
  const username = data.get("username")?.toString() ?? '';
  const password = data.get("password")?.toString() ?? '';

  console.log(username);
  console.log(password);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    },
    body: new URLSearchParams({
      'username': username,
      'password': password,
      'grant_type': '',
      'scope': '',
      'client_id': '',
      'client_secret': ''
    }).toString()
  };
  
  try {
    const response = await fetch(`${process.env.BACKEND_DOMAIN}/account/login`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      // Successfully logged in
      const jwt = responseData.access_token;
      cookies().set("cupidai-session", jwt, { secure: true, httpOnly: true, sameSite: false, domain: '.cupidai.tech' });
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

export async function onRequestOneTimeLink(prevState: FormState, data: FormData): Promise<{ message: string }> {
  console.log("ACTIVATED REQUEST ONE TIME LINK")
  const email = data.get("email")?.toString() ?? '';

  console.log(email);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({ email: email })
  };
  
  try {
    const response = await fetch(`${process.env.BACKEND_DOMAIN}/account/request-one-time-link`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      console.log('One-time link requested successfully');
    } else if (response.status === 404 || response.status === 404) {
      throw new Error(responseData.detail);
    } else {
      // Handle other error cases
      throw new Error(response.statusText);
    }
  } catch (error: any) {
    console.error('Error occurred while requesting one-time link:', error);

    return {
      message: error.message
   }
  }
  return {
    message: 'success'
 }
}


export async function onChangePassword(uuid: string, prevState: FormState, data: FormData): Promise<{ message: string }> {
  const password = data.get("password")?.toString() ?? '';

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  };
  
  try {
    const response = await fetch(`${process.env.BACKEND_DOMAIN}/account/change-password?password_reset_id=${encodeURIComponent(uuid)}&password=${encodeURIComponent(password)}`, requestOptions);
    const responseData = await response.json();

    if (response.ok) {
      console.log('Password changed successfully');
      return { message: 'success' };
    } else if (response.status === 400) {
      throw new Error(responseData.detail);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error: any) {
    console.error('Error occurred while changing password:', error);
    return { message: error.message };
  }
}