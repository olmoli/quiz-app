
'use client';
import React from "react";

export default function Home() {
  const questions = [
    {
      question: "Which game features a character named Mario who saves Princess Peach?",
      answers: ["Sonic the Hedgehog", "Super Mario Bros.", "Minecraft"],
      correct: "Super Mario Bros."
    },
    {
      question: "In which game do players build with blocks and survive in a pixel world?",
      answers: ["Minecraft", "Fortnite", "The Sims"],
      correct: "Minecraft"
    },
    {
      question: "Which battle royale game includes characters building walls and towers during fights?",
      answers: ["PUBG", "Fortnite", "Apex Legends"],
      correct: "Fortnite"
    },
    {
      question: "Which game series features the character Sonic, a very fast blue hedgehog?",
      answers: ["Sonic the Hedgehog", "Crash Bandicoot", "Rayman"],
      correct: "Sonic the Hedgehog"
    },
    {
      question: "In which game do players steal cars and explore a large open city?",
      answers: ["Need for Speed", "Grand Theft Auto", "Watch Dogs"],
      correct: "Grand Theft Auto"
    },
    {
      question: "Which game lets players simulate life by building houses and controlling characters?",
      answers: ["Animal Crossing", "The Sims", "SimCity"],
      correct: "The Sims"
    },
    {
      question: "Which popular game features characters called 'creepers'?",
      answers: ["Terraria", "Roblox", "Minecraft"],
      correct: "Minecraft"
    },
    {
      question: "Which game is about catching and training creatures called Pokémon?",
      answers: ["Pokémon", "Digimon", "Monster Hunter"],
      correct: "Pokémon"
    },
    {
      question: "In which game do players race cars in realistic tracks and vehicles?",
      answers: ["FIFA", "Gran Turismo", "NBA 2K"],
      correct: "Gran Turismo"
    },
    {
      question: "Which game is famous for the phrase 'Victory Royale'?",
      answers: ["Fortnite", "Call of Duty", "Counter-Strike"],
      correct: "Fortnite"
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState<string | null>(null);
  const [feedback, setFeedback] = React.useState<string>("");
  const [success, setSuccess] = React.useState(false);
  const [correctCount, setCorrectCount] = React.useState(0);

  const nextButton = (
    <button
      onClick={handleNext}
      style={{
        display: 'block',
        margin: '8px auto 0',
        padding: '10px 24px',
        fontSize: '16px',
        borderRadius: '6px',
        border: '2px solid #0070f3',
        background: '#0070f3',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        outline: 'none',
      }}
    >
      Next Question
    </button>
  );

  function handleAnswer(answer: string) {
    setSelected(answer);
    if (answer === questions[current].correct) {
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
    <main>
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.3; }
        }
      `}</style>
      <img 
        src="/logo_quiz.jpg" 
        alt="Famous computer games trivia" 
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: 0
        }}
      />
      <div style={{ marginTop: 24, padding: '30px', border: '1px solid #e0e0e0', borderRadius: '8px', textAlign: 'center' }}>
        {current < questions.length ? (
          <>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>Question {current + 1}/10</p>
            <h2 style={{ fontSize: '1.2em' }}>{questions[current].question}</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
              {questions[current].answers.map((answer) => {
                const isCorrect = answer === questions[current].correct;
                const isSelected = answer === selected;
                let bg = '#fff';
                let col = '#0070f3';
                if (selected !== null) {
                  if (isCorrect) {
                    bg = 'green';
                    col = 'white';
                  } else if (isSelected) {
                    bg = 'red';
                    col = 'white';
                  }
                }
                return (
                  <button
                    key={answer}
                    onClick={() => handleAnswer(answer)}
                    disabled={selected !== null}
                    style={{
                      width: '100%',
                      padding: '10px 24px',
                      fontSize: '16px',
                      borderRadius: '6px',
                      border: '2px solid #0070f3',
                      background: bg,
                      color: col,
                      cursor: selected !== null ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      outline: 'none',
                    }}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
            {feedback && <p style={{ marginTop: 16 }}>{feedback}</p>}
            {!success && selected !== null && feedback && (
              <div style={{ marginTop: 16 }}>
                <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Correct answer: {questions[current].correct}</p>
                {nextButton}
              </div>
            )}
            {success && current < questions.length - 1 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ color: 'green', fontWeight: 'bold' }}>Success! 🎉</p>
                {nextButton}
              </div>
            )}
            {success && current === questions.length - 1 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ color: 'green', fontWeight: 'bold' }}>Success! 🎉</p>
                <button
                  onClick={handleNext}
                  style={{
                    display: 'block',
                    margin: '8px auto 0',
                    padding: '10px 24px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: '2px solid #0070f3',
                    background: '#0070f3',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    outline: 'none',
                  }}
                >
                  See Results
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: '48px', color: 'green', fontWeight: 'bold', marginBottom: '16px' }}>Congratulations! 🎉</p>
            <p style={{ fontSize: '28px', marginBottom: '24px' }}>You answered {correctCount} out of 10 questions correctly!</p>
            <p style={{ fontSize: '18px', color: '#666' }}>Great job on completing the quiz!</p>
          </div>
        )}
      </div>
    </main>
  );
}