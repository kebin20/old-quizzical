export interface CardProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
  }

  export interface AnswerButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    name?: string;
    disabled?: boolean;
  }

export interface FetchedQuiz {
  choices: {
    choice: string;
    isSelected: boolean;
    correct: string;
    id: string;
  }[];
  id: string;
  question: string;
  correct: string[];
}

  export interface ModifiedQuiz extends FetchedQuiz {
    correct_answer: string
    incorrect_answers: string[]
    endQuiz: boolean;
    holdAnswer: (id: string) => void;
    onSaveCorrectCountData: (count: number) => void;
  }

