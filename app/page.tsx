
'use client';
import React from "react";

export default function Home() {
  const questions = [
    {
      question: "Which game usually starts with gathering basic resources like wood to craft your first tools?",
      answers: ["Terraria", "Minecraft", "Rust"],
      correct: "Minecraft"
    },
    {
      question: "In which game do you collect rings that scatter when you get hit?",
      answers: ["Rayman", "Sonic the Hedgehog", "Crash Bandicoot"],
      correct: "Sonic the Hedgehog"
    },
    {
      question: "Which game is known for allowing players to quickly build structures during combat?",
      answers: ["Apex Legends", "Fortnite", "Overwatch"],
      correct: "Fortnite"
    },
    {
      question: "In which game can you freely explore a city, complete missions, and steal vehicles?",
      answers: ["Watch Dogs", "Saints Row", "Grand Theft Auto"],
      correct: "Grand Theft Auto"
    },
    {
      question: "Which game focuses on controlling characters’ daily lives, including jobs, relationships, and home design?",
      answers: ["SimCity", "The Sims", "Animal Crossing"],
      correct: "The Sims"
    },
    {
      question: "In which game do you choose a civilization and guide it from ancient times into the future?",
      answers: ["Age of Empires", "Civilization", "Total War"],
      correct: "Civilization"
    },
    {
      question: "Which classic game features a character eating pellets while avoiding ghosts in a maze?",
      answers: ["Bomberman", "Pac-Man", "Tetris"],
      correct: "Pac-Man"
    },
    {
      question: "In which game do you explore dungeons, solve puzzles, and battle enemies like Ganon?",
      answers: ["Dark Souls", "The Legend of Zelda", "Skyrim"],
      correct: "The Legend of Zelda"
    },
    {
      question: "Which game is known for its team-based matches involving planting or defusing a bomb?",
      answers: ["Rainbow Six Siege", "Counter-Strike", "Valorant"],
      correct: "Counter-Strike"
    },
    {
      question: "In which game do you control a plumber who travels through pipes and fights Bowser?",
      answers: ["Donkey Kong", "Super Mario Bros.", "Kirby"],
      correct: "Super Mario Bros."
    }
  ];

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
        {current < shuffledQuestions.length ? (
          <>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>Question {current + 1}/10</p>
            <h2 style={{ fontSize: '1.2em' }}>{shuffledQuestions[current].question}</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
              {shuffledQuestions[current].answers.map((answer) => {
                const isCorrect = answer === shuffledQuestions[current].correct;
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
                <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Correct answer: {shuffledQuestions[current].correct}</p>
                {nextButton}
              </div>
            )}
            {success && current < shuffledQuestions.length - 1 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ color: 'green', fontWeight: 'bold' }}>Success! 🎉</p>
                {nextButton}
              </div>
            )}
            {success && current === shuffledQuestions.length - 1 && (
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