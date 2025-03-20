import React, { useCallback, useState } from "react";
import menu from "../assets/menu.png";
import clock from "../assets/clock.png";
import Button from "../components/ui/Button";
import arrowL from "../assets/arrow-left.png";
import arrowR from "../assets/arrow-right.png";
import Timer from "../components/ui/Timer";

const questions = [
  {
    _id: 1,
    question: "Which of the following words is a synonym for 'exhilarating'?",
    options: ["Exciting", "Boring", "Tiresome", "Frightening", "Confusing"],
    answer: "Exciting",
  },
  {
    _id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    _id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    _id: 5,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

function Question() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  }, [currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedAnswer(null);
    }
  }, [currentQuestion]);

  const handleSelectAnswer = useCallback((answer) => {
    setAnswers((prev) => {
      const exists = prev.some((item) => item._id === answer._id);

      if (exists) {
        return prev.map((item) =>
          item._id === answer._id ? { ...item, answer: answer.answer } : item
        );
      } else {
        return [...prev, answer];
      }
    });
  }, []);


    const handleAutoSubmit = () => {
    // Logic to submit the quiz
    console.log("Time's up! Submitting the quiz...");
    alert("Time's up! Quiz submitted.");
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <div
        className={`w-full sm:w-1/4 lg:w-1/5 p-4  transition-all duration-300 `}
      >
        <Button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`text-xl ${
            isSidebarOpen && "float-end"
          } cursor-pointer rounded-md  focus:outline-none`}
          aria-label="Toggle sidebar"
          icon={menu}
        />
        {isSidebarOpen && (
          <div className="mt-10">
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {questions.map((question, i) => (
                <li
                  key={i}
                  className={`p-2.5 text-center cursor-pointer border border-casal rounded-md 
                  ${
                    answers.find((answer) => answer._id === question._id)
                      ? "bg-[#F7FFEB]" // Green: Answered
                      : currentQuestion > i
                      ? "bg-gray-500" // Gray: Skipped
                      : "bg-white" // White: Not attended
                  }`}
                  onClick={() => setCurrentQuestion(i)}
                >
                  {i + 1}
                </li>
              ))}
            </ul>

            <div className="p-3 mt-10 space-y-3 md:mt-72">
              <h1 className="flex items-center space-x-2 gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Attend
              </h1>
              <h1 className="flex items-center space-x-2 gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                Not Attended
              </h1>
              <h1 className="flex items-center space-x-2 gap-1">
                <span className="w-2 h-2 rounded-full border"></span>
                Yet to Attend
              </h1>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className=" text-lg md:text-2xl font-bold relative w-fit mx-auto mb-5">
            Assess Your{" "}
            <span className="relative">
              Intelligence
              <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-yellow-500"></span>
            </span>
          </h1>
       <Timer onTimeUp={handleAutoSubmit}/>
        </div>

        {/* Progress Bar */}
        <div className="flex w-full items-center gap-2 mb-4">
          <div className="w-3/4 bg-gray-300 rounded-full h-2 relative">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>

          <span className="text-lg font-bold">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>

        {/* Question & Answers */}
        <div className="bg-[#F4F4F4] p-4 sm:p-6 shadow-md rounded-md">
          <h2 className="md:text-lg font-semibold mb-4 flex items-center space-x-2 gap-3">
            <span className=" w-10 md:h-12 md:w-12 bg-casal rounded-full flex items-center justify-center text-white font-bold">
              {currentQuestion + 1}
            </span>
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-2 bg-white py-5 px-8">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className={`w-full flex items-center space-x-2 p-3 hover:bg-[#E7FFD9] rounded-md cursor-pointer ${
                  selectedAnswer === option ? "bg-[#E7FFD9]" : "bg-[#FAFAFA]"
                }`}
              >
                <input
                  type="radio"
                  name="quiz"
                  value={
                    answers.find(
                      (answer) => answer._id === questions[currentQuestion]._id
                    )?.answer || option
                  }
                  checked={
                    answers.find(
                      (answer) => answer._id === questions[currentQuestion]._id
                    )?.answer === option
                  }
                  onChange={() => {
                    setSelectedAnswer(option);
                    handleSelectAnswer({
                      _id: questions[currentQuestion]._id,
                      answer: option,
                    });
                  }}
                  className="peer accent-[#217C58] w-5 h-5"
                />

                <span>{option}</span>
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex text-white justify-end gap-1 mt-4">
            <Button
              icon={arrowL}
              iconClassName="w-7 h-7"
              className="px-4 py-2 rounded focus:outline-none bg-casal flex gap-1 cursor-pointer"
              label="Previous"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            />
            <Button
              icon={arrowR}
              isRigh={true}
              iconClassName="w-7 h-7"
              className="px-4 py-2 rounded focus:outline-none bg-casal flex gap-1 cursor-pointer"
              label="Next"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
