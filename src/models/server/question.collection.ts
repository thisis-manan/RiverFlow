import {DatabasesIndexType, OrderBy, Permission} from "node-appwrite"

import {db, questionCollection} from "../name"
import {databases} from "./config"


export default async function createQuestionCollection(){
  // create collection
  await databases.createCollection(db, questionCollection, questionCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ])
  console.log("Question collection is created")

  //creating attributes and Indexes

  await Promise.all([
    databases.createStringAttribute(db, questionCollection, "title", 100, true),
    databases.createStringAttribute(db, questionCollection, "content", 10000, true),
    databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
    databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
    databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
  ]);
  console.log("Question Attributes created")

  // Wait until the attributes we index on finish processing before creating
  // indexes, otherwise Appwrite rejects with "attribute is not yet available".
  await waitForAttributesAvailable(["title", "content"])

  // create Indexes
  await Promise.all([
    databases.createIndex(
      db,
      questionCollection,
      "title",
      DatabasesIndexType.Fulltext,
      ["title"],
      [OrderBy.Asc]
    ),
    databases.createIndex(
      db,
      questionCollection,
      "content",
      DatabasesIndexType.Fulltext,
      ["content"],
      [OrderBy.Asc]
    )
  ])

}

async function waitForAttributesAvailable(keys: string[], tries = 30, delayMs = 500) {
  for (const key of keys) {
    for (let i = 0; i < tries; i++) {
      const attr = await databases.getAttribute(db, questionCollection, key)
      if ((attr as { status: string }).status === "available") break
      await new Promise((r) => setTimeout(r, delayMs))
    }
  }
}
