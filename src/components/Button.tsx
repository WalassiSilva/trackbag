export type ButtonProps = {
  children: React.ReactNode;
  buttonType?: "primary" | "secondary";
  onClick?: () => void;
};
export default function Button({ onClick, buttonType, children }: ButtonProps) {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
