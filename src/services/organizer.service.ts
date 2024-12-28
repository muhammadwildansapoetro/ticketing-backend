import prisma from "../prisma";

export const findOrganizer = async (name: string, email: string) => {
  const organizer = await prisma.organizer.findFirst({
    where: { OR: [{ name: name }, { email: email }] },
  });

  return organizer;
};