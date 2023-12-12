"use client";

import React, { useTransition } from "react";
import { AddTodo } from "../(actions)/ServerActions";

const AddToButton = () => {
  const [isPending, setTransition] = useTransition();
  const formData = new FormData();

  formData.append("title", "todos task");
  formData.append("description", "todos description");
  return (
    <button
      className="bg-purple-500 px-12 py-3 fixed bottom-10
     text-white rounded right-10"
      onClick={() => setTransition(() => AddTodo(formData))}
    >
      {isPending ? `loading ...` : `AddToButton`}
    </button>
  );
};

export default AddToButton;
