const CapitalQuizButton = ({ initValue, setInitValue }) => {
  return (
    <>
      {initValue && initValue === "Start" ? (
        <button
          type="button"
          onClick={() => {
            setInitValue("");
          }}
          className="answer-btn green"
        >
          {initValue}
        </button>
      ) : (
        <button className="answer-btn" type="submit">
          SUBMIT
          <span class="checkmark">✔</span>
          <span class="cross" id="error">
            ✖
          </span>
        </button>
      )}
    </>
  );
};

export default CapitalQuizButton;
