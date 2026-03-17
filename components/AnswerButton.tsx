interface AnswerButtonProps {
  answer: string;
  isCorrect: boolean;
  isSelected: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function AnswerButton({ answer, isCorrect, isSelected, onClick, disabled }: AnswerButtonProps) {
  let buttonClasses = "w-full px-6 py-3 text-base rounded-md border-2 border-blue-500 bg-white text-blue-500 cursor-pointer transition-all duration-200 shadow-sm outline-none hover:shadow-md hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95";

  if (disabled) {
    if (isCorrect) {
      buttonClasses = "w-full px-6 py-3 text-base rounded-md border-2 border-green-500 bg-green-500 text-white cursor-not-allowed shadow-sm";
    } else if (isSelected) {
      buttonClasses = "w-full px-6 py-3 text-base rounded-md border-2 border-red-500 bg-red-500 text-white cursor-not-allowed shadow-sm";
    } else {
      buttonClasses = "w-full px-6 py-3 text-base rounded-md border-2 border-blue-500 bg-white text-blue-500 cursor-not-allowed shadow-sm";
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {answer}
    </button>
  );
}