const getGoogleUrl = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_url: process.env.GOOGLE_AUTH_REDIRECTURL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scopes: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  console.log(process.env);

  const qs = new URLSearchParams(options);

  console.log({ qs });

  return `${rootUrl}?${qs.toString()}`;
};

export default getGoogleUrl;
