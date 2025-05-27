const cognitoAuthConfig = {
  authority: process.env.NEXT_PUBLIC_OIDC_AUTHORITY!,
  client_id: process.env.NEXT_PUBLIC_OIDC_CLIENT_ID!,
  redirect_uri: process.env.NEXT_PUBLIC_OIDC_REDIRECT_URI!,
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: process.env.NEXT_PUBLIC_OIDC_LOGOUT_REDIRECT_URI!,
};

export default cognitoAuthConfig;
