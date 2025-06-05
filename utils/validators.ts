import crypto from "crypto";

export function validateInput(
  username: string,
  email: string,
  password: string
): boolean {
  return (
    typeof username === "string" &&
    username.length >= 5 &&
    typeof email === "string" &&
    email.includes("@") &&
    typeof password === "string" &&
    password.length >= 10
  );
}

export async function comparePasswords({
  password,
  salt,
  hashedPassword,
}: {
  password: string;
  salt: string;
  hashedPassword: string;
}): Promise<boolean> {
  const inputHashed = await hashPassword(password, salt);
  return crypto.timingSafeEqual(
    Buffer.from(inputHashed, "hex"),
    Buffer.from(hashedPassword, "hex")
  );
}

export function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (err, derivedKey) => {
      if (err) return reject(err);
      resolve(derivedKey.toString("hex").normalize());
    });
  });
}

export function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex");
}
