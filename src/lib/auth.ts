import { auth } from "@/auth";

export const getSession = async () => {
  return await auth();
};

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentId = async () => {
  const session = await auth();

  return session?.user?.userId;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.userRole;
};

export const currentPhone = async () => {
  const session = await auth();

  return session?.user?.userPhone;
};
