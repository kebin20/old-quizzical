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
    // className?: string;
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    name?: string;
    disabled?: boolean;
  }