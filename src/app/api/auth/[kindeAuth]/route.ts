import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: Request, { params }: any) {
  const endpoint = params.kindeAuth;
  return await handleAuth(request, endpoint);
}
