import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async ({ params }: { params: Promise<{ quesId: string; quesName: string }> }) => {
    const { quesId } = await params;
    const question = await databases.getDocument(db, questionCollection, quesId);

    // Appwrite responses are null-prototype objects; React can't pass those to a
    // Client Component, so deep-clone into a plain object.
    return <EditQues question={JSON.parse(JSON.stringify(question))} />;
};

export default Page;
