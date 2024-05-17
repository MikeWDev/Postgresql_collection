const CapitalQuizButton = ({ initValue, setInitValue }) => {
  return (
    <>
      {initValue && initValue === "Start" ? (
        <button
          type="submit"
          onClick={(e) => {
            setInitValue("");
          }}
          className="answer-btn green"
        >
          {initValue}
        </button>
      ) : (
        <button
          className="answer-btn"
          // onClick={(e) => e.preventDefault()}
          type="submit"
        >
          SUBMIT
        </button>
      )}
    </>
  );
};

export default CapitalQuizButton;
