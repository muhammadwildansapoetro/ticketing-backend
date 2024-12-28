import prisma from "../prisma";

export const findCustomer = async (username: string, email: string) => {
  const customer = await prisma.customer.findFirst({
    where: { OR: [{ username: username }, { email: email }] },
  });

  return customer;
};

export const findRefCode = async (referralCode: string) => {
  const refCodeData = await prisma.customer.findFirst({ where: {referralCode: referralCode}})
  return refCodeData
}