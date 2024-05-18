const CapitalQuizButton = ({ initValue, setInitValue }) => {
  return (
    <>
      {initValue && initValue === "Start" ? (
        <button
          form="capitalForm"
          type="submit"
          onClick={(e) => {
            setInitValue("");
          }}
          className="answer-btn green"
        >
          {initValue}
        </button>
      ) : (
        <button className="answer-btn" form="capitalForm" type="submit">
          SUBMIT
        </button>
      )}
    </>
  );
};

export default CapitalQuizButton;
