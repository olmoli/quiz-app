interface NextButtonProps {
  text: string;
  onClick: () => void;
}

export default function NextButton({ text, onClick }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="block mx-auto mt-2 px-6 py-3 text-base rounded-md border-2 border-blue-500 bg-blue-500 text-white cursor-pointer transition-all duration-200 shadow-sm outline-none hover:shadow-md hover:bg-blue-600 hover:scale-105 active:bg-blue-700 active:scale-95"
    >
      {text}
    </button>
  );
}