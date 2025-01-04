import prisma from "../prisma";

export const findOrganizer = async (username: string, email: string) => {
  const organizer = await prisma.organizer.findFirst({
    where: { OR: [{ username: username }, { email: email }] },
  });

  return organizer;
};
