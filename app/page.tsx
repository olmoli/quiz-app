
'use client';
import React from "react";
import { questions } from "../data/questions";
import AnswerButton from "../components/AnswerButton";
import NextButton from "../components/NextButton";

export default function Home() {
  const [shuffledQuestions, setShuffledQuestions] = React.useState<typeof questions>([]);

  React.useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState<string | null>(null);
  const [feedback, setFeedback] = React.useState<string>("");
  const [success, setSuccess] = React.useState(false);
  const [correctCount, setCorrectCount] = React.useState(0);

  function handleAnswer(answer: string) {
    setSelected(answer);
    if (answer === shuffledQuestions[current].correct) {
      setFeedback("Correct");
      setSuccess(true);
    } else {
      setFeedback("Wrong");
      setSuccess(false);
    }
  }

  function handleNext() {
    if (success) {
      setCorrectCount((prev) => prev + 1);
    }
    setCurrent((prev) => prev + 1);
    setSelected(null);
    setFeedback("");
    setSuccess(false);
  }

  return (
    <main className="mt-6 p-8 border border-gray-200 rounded-lg text-center">
      {current < shuffledQuestions.length ? (
        <>
          <p className="text-2xl font-bold text-blue-600 mb-5">Question {current + 1}/{shuffledQuestions.length}</p>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">{shuffledQuestions[current].question}</h2>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto p-6">
            {shuffledQuestions[current].answers.map((answer) => {
              const isCorrect = answer === shuffledQuestions[current].correct;
              const isSelected = answer === selected;
              return (
                <AnswerButton
                  key={answer}
                  answer={answer}
                  isCorrect={isCorrect}
                  isSelected={isSelected}
                  onClick={() => handleAnswer(answer)}
                  disabled={selected !== null}
                />
              );
            })}
          </div>
          {feedback && <p className="mt-6 text-lg">{feedback}</p>}
          {!success && selected !== null && feedback && (
            <div className="mt-6">
              <p className="text-red-600 font-semibold mb-2">Correct answer: {shuffledQuestions[current].correct}</p>
              <NextButton text="Next Question" onClick={handleNext} />
            </div>
          )}
          {success && current < shuffledQuestions.length - 1 && (
            <div className="mt-6">
              <p className="text-green-600 font-semibold mb-2">Success! 🎉</p>
              <NextButton text="Next Question" onClick={handleNext} />
            </div>
          )}
          {success && current === shuffledQuestions.length - 1 && (
            <div className="mt-6">
              <p className="text-green-600 font-semibold mb-2">Success! 🎉</p>
              <NextButton text="See Results" onClick={handleNext} />
            </div>
          )}
        </>
      ) : (
        <div className="text-center p-8 sm:p-12 max-w-md mx-auto px-4">
          <p className="text-4xl sm:text-5xl md:text-7xl text-green-600 font-bold mb-6">Congratulations! 🎉</p>
          <p className="text-xl sm:text-2xl md:text-4xl mb-8 text-gray-800">You answered {correctCount} out of {shuffledQuestions.length} questions correctly!</p>
          <p className="text-lg sm:text-xl text-gray-600">Great job on completing the quiz!</p>
        </div>
      )}
    </main>
  );
}