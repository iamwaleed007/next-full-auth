"use server";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/db-utils";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const signup = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "User already exists" };

  await db.user.create({
    data: { name, email, password: hashedPassword },
  });

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: "Confirmation email sent." };
};
