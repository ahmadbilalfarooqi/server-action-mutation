"use server";
import { revalidateTag } from "next/cache";
// use server action
export const AddTodo = async (e: any) => {
  "use server";
  const title = e.get("title")?.toString();
  const description = e.get("description")?.toString();

  // use POST method for updated
  const response = await fetch(
    `https://65786cfaf08799dc804548db.mockapi.io/todos`,
    {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  revalidateTag("todos");
};
