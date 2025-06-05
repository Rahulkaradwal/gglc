export async function signUp({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}): Promise<string | undefined> {
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return data.error || "Something went wrong.";
    }

    // Optional: redirect or show success state here
    return undefined;
  } catch (error) {
    console.error("Signup error:", error);
    return "Signup failed. Try again later.";
  }
}

export async function logIn({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}): Promise<{ error?: string }> {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.error || "Something went wrong." };
    }

    return {}; // no error
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Login failed. Try again later." };
  }
}
