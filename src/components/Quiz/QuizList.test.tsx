import React from "react";
import { render, screen } from "@testing-library/react";
import QuizList from "./QuizList";

describe("fetchTodohandler function", () => {
  test("will fetch todos from firebase", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [
        {
          category: "General Knowledge",
          correct_answer: "Ampersand",
          difficulty: "medium",
          incorrect_answers: ["Interrobang", "Tilde", "Pilcrow"],
          question:
            "What character was once considered to be the 27th letter of the alphabet?",
          type: "multiple",
        },
      ],
    });

    render(<QuizList />);

    const listItemElements = await screen.findAllByRole("list");
    expect(listItemElements).not.toHaveLength(0);
  });
});
