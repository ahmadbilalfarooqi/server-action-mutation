import { AddTodo } from "./(actions)/ServerActions";
import AddToButton from "../app/(components)/addTodoButton";

export default async function Home() {
  // MockAPI fetch by end-points
  const response = await fetch(
    `https://65786cfaf08799dc804548db.mockapi.io/todos`,
    {
      cache: "no-cache",
      next: {
        tags: ["todos"],
      },
    }
  );
  const data = await response.json();

  // return function
  return (
    <section className="w-full min-h-screen py-10">
      <AddToButton />
      <form action={AddTodo} className="w-1/2 m-auto">
        <div className="mb-3">
          <input
            name="title"
            type="text"
            placeholder="Enter Title"
            className="w-full py-2 border px-2"
          />
        </div>
        <div className="mb-3">
          <input
            name="description"
            type="text"
            placeholder="Enter Description"
            className="w-full py-2 border px-2"
          />
        </div>
        <div className="mb-3">
          <button className="w-full bg-green-500 rounded py-2 ">
            Add Todo
          </button>
        </div>
      </form>
      <div className="flex flex-wrap gap-5">
        {data.map((c: any, i: any) => {
          return (
            <div key={i} className="w-1/4 border p-4 m-auto">
              <h1>{c.title}</h1>
              <p>{c.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
