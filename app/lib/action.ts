"use server"

import { sendMail } from "./mail";



export async function ContactEmail(
    prevState: string | object | undefined,
    formData: FormData
  ) {
    const data = Object.fromEntries(formData.entries());
  
    try {

      await sendMail({
        to: process.env.SMTP_EMAIL as string,
        name: data.name as string,
        subject: data.subject as string,
        content: data.content as string,
      });
  
      return {
        message: `${data.name} your message has been sent, if you cant wait... call`,
      };
    } catch (error) {
      console.log(error);
      return { message: "I am sorry but the request failed.... you got denied" };
    }
  }