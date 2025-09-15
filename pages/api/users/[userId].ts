import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid user id");
    }

    const user = await prisma?.user.findUnique({
      where: {
        id: userId,
      },
    });

    const folllower = await prisma?.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return res.status(200).json({ ...user, folllower });
  } catch (error) {
    console.error(`[USER_${req.query}}]`, error);
    return res.status(401).json(null);
  }
}
