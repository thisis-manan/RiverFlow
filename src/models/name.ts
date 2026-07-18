import type { Models } from "appwrite"

export const db="main-stackflow"
export const questionCollection ="questions"
export const answerCollection = "answers"
export const commentCollection = "comments"
export const voteCollection ="vote"
export const questionAttachmentBucket = "question-attachment"

// Base Appwrite document fields plus this app's collection attributes and
// runtime-joined fields (author, comments, totalVotes, …). Structural (unlike
// Models.DefaultDocument) so server node-appwrite docs stay assignable to it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDocument = Models.Document & Record<string, any>