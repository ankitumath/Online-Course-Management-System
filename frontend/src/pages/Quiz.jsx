import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getQuiz,
} from "../services/quizService";

import {
  useAuth,
} from "../context/AuthContext";

import {
  saveResult,
} from "../services/quizResultService";

function Quiz() {

    const { token } =
  useAuth();

  const { courseId } =
    useParams();

  const [questions,
    setQuestions] =
    useState([]);

  const [score,
    setScore] =
    useState(null);

  const [answers,
    setAnswers] =
    useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz =
    async () => {

      const response =
        await getQuiz(
          courseId
        );

      setQuestions(
        response.data
      );
    };

  const submitQuiz =
  async () => {

    let total = 0;

    questions.forEach(
      (question) => {

        if (
          answers[
            question._id
          ] ===
          question.correctAnswer
        ) {
          total++;
        }
      }
    );

    setScore(total);

    try {

      await saveResult(
        {
          courseId,
          score: total,
          totalQuestions:
            questions.length,
        },
        token
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Course Quiz
      </h1>

      {questions.map(
        (question) => (

          <div
            key={question._id}
            className="
            border
            p-4
            mb-4
            rounded-lg
            "
          >

            <h2>
              {question.question}
            </h2>

            {question.options.map(
              (option) => (

                <label
                  key={option}
                  className="
                  block
                  mt-2
                  "
                >
                  <input
                    type="radio"
                    name={
                      question._id
                    }
                    value={option}
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        [
                          question._id
                        ]:
                          e.target
                            .value,
                      })
                    }
                  />

                  {" "}
                  {option}
                </label>
              )
            )}

          </div>
        )
      )}

      <button
        onClick={
          submitQuiz
        }
        className="
        bg-indigo-600
        text-white
        px-6
        py-3
        rounded-lg
        "
      >
        Submit Quiz
      </button>

      {score !== null && (
        <h2
          className="
          text-2xl
          font-bold
          mt-6
          "
        >
          Score:
          {" "}
          {score}
          /
          {
            questions.length
          }
        </h2>
      )}

    </div>
  );
}

export default Quiz;