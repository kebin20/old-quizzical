export interface CardProps {
    className?: string;
    children: React.ReactNode;
  }

  export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
  }