export function SurveyForm({ page }) {
  const pageData = {
    1: {
      question: "How are you feeling today?",
    },
    2: {
      question: "How well are you understanding the content?",
    },
    3: {
      question: "How well are you being supported?",
    },
    4: {
      question: "Any comments you have?",
    },
  };

  return <h2>{pageData[page].question}</h2>;
}
