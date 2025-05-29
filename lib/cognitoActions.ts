import { redirect } from "next/navigation";
import { signIn, signOut } from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  let redirectLink = "/dashboard";
  try {
    const { isSignedIn } = await signIn({
      username: String(formData.get("username")),
      password: String(formData.get("password")),
    });

    if (isSignedIn) {
      redirectLink = "/dashboard";
    } else {
      redirectLink = "/";
    }
  } catch (error) {
    console.log(error);
    return getErrorMessage(error);
  }

  redirect(redirectLink);
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
  redirect("/");
}
