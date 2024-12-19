import prisma from "../prisma";

export const findCustomer = async (username: string, email: string) => {
  const customer = await prisma.customer.findFirst({
    where: { OR: [{ username: username }, { email: email }] },
  });

  return customer;
};