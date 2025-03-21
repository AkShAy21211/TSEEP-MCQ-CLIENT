import React, { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import check from "../assets/check.png";
import home from "../assets/home.png";
import confused from "../assets/confused.png";
import excellent from "../assets/excellent.png";
import sad from "../assets/sad.png";
import smile from "../assets/smile.png";
import hot from "../assets/hot.png";
import { getTestResult, sendFeedBack } from "../api/test";
import Loading from "../components/ui/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Success() {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [comment, setComment] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const emojis = [
    { icon: hot, label: "😡" },
    { icon: sad, label: "😢" },
    { icon: confused, label: "😐" },
    { icon: smile, label: "😊" },
    { icon: excellent, label: "😁" },
  ];

  useEffect(() => {
    fetchTestResult();
  }, []);

  async function fetchTestResult(params) {
    try {
      const response = await getTestResult();
      setResult(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async () => {
    if (comment.trim().length < 3) {
      setErrorMessage("Please enter a comment with at least 3 characters.");
      return;
    }

    try {
      const response = await sendFeedBack(result._id, {
        comment,
        emoji: selectedEmoji,
      });
      toast.success(response.message, {
        duration: 3000,
        position: "top-center",
      });
      setErrorMessage("");
      localStorage.clear();
      navigate("/");

      return;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  if (!result) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <div className="bg-white p-6 rounded-lg  text-center w-full max-w-2xl">
        {/* Success Message */}
        <div className="flex flex-col items-center">
          <img src={check} alt="TSEEP Academy" />
          <div className="text-xl ">
            Congratulations! You have successfully completed the test.
          </div>
          <div className="text-lg mt-2">
            Score :
            <span className="bg-[#FAC167] px-3 py-1 rounded-2xl mx-2">
              {result.score}/{result.total}
            </span>
          </div>
          <div className="bg-casal text-white px-4 py-2 rounded-lg mt-2 text-lg font-semibold">
            Your ID: {result.testId}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-4 rounded-lg mt-6   shadow-lg text-start">
          <h2 className="text-sm font-semibold">feedback</h2>
          <h4 className="text-lg font-semibold mt-5">Give us a feedback!</h4>
          <p className="text-sm text-gray-600 mb-3">
            Your input is important for us. We take customer feedback very
            seriously.
          </p>

          {/* Emoji Ratings */}
          <div className="flex justify-start space-x-4 my-4">
            {emojis.map((emoji) => (
              <button
                key={emoji.label}
                onClick={() => setSelectedEmoji(emoji.label)}
                className={`p-3 rounded-full border transition-all  cursor-pointer ${
                  selectedEmoji === emoji.label
                    ? "bg-green-100 border-green-500"
                    : "border-gray-300"
                }`}
                title={emoji.label}
              >
                <img
                  src={emoji.icon}
                  alt={emoji.label}
                  className={`w-10
              ${selectedEmoji === emoji.label ? "" : " filter grayscale"}
                `}
                />
              </button>
            ))}
          </div>

          {/* Comment Box */}
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-3 border rounded-lg"
          ></textarea>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-80 bg-casal text-white py-2 rounded-lg mt-4 cursor-pointer"
            label={"Submit Feedback"}
          />
        </div>
      </div>
      {/* Back to Home */}
      <button className="mt-4 text-gray-600 text-sm flex items-center space-x-1">
        <span>
          <img src={home} alt="" />
        </span>
        <span>Back to home</span>
      </button>
    </div>
  );
}

export default Success;
