import { Query } from "node-appwrite";

import { DATABASE_ID, MEMBERS_COLLECTION_ID } from "@/appwrite-config";
import { GetMemberProps } from "./type";

export async function getMember({
  databases,
  workspaceId,
  userId,
}: GetMemberProps) {
  const members = await databases.listDocuments(
    DATABASE_ID,
    MEMBERS_COLLECTION_ID,
    [Query.equal("workspaceId", workspaceId), Query.equal("userId", userId)]
  );

  return members.documents[0];
}
