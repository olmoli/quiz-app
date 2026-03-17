
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
    setCorrectCount((prev) => prev + 1);
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
      <h1 style={{
        fontSize: '72px',
        animation: 'blink 1s infinite',
        textAlign: 'center',
        margin: '40px 0'
      }}>
        Famous computer games trivia!
      </h1>
      <div style={{ marginTop: 24, padding: '30px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>Question {current + 1}/10</p>
        <h2>{questions[current].question}</h2>
        <div style={{ display: "flex", gap: 12 }}>
          {questions[current].answers.map((answer) => (
            <button
              key={answer}
              onClick={() => handleAnswer(answer)}
              disabled={selected !== null}
              style={{
                padding: '10px 24px',
                fontSize: '16px',
                borderRadius: '6px',
                border: '2px solid #0070f3',
                background: selected === answer ? '#0070f3' : '#fff',
                color: selected === answer ? '#fff' : '#0070f3',
                cursor: selected !== null ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s, color 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                outline: 'none',
              }}
            >
              {answer}
            </button>
          ))}
        </div>
        {feedback && <p style={{ marginTop: 16 }}>{feedback}</p>}
        {success && current < questions.length - 1 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ color: 'green', fontWeight: 'bold' }}>Success! 🎉</p>
            <button
              onClick={handleNext}
              style={{
                marginTop: 8,
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
          </div>
        )}
        {success && current === questions.length - 1 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ color: 'green', fontWeight: 'bold', fontSize: '24px' }}>Quiz Complete! 🎉</p>
            <p style={{ fontSize: '18px', marginTop: '16px' }}>{correctCount + 1}/10 questions answered correctly</p>
          </div>
        )}
      </div>
    </main>
  );
}