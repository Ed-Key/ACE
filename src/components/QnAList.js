import React, { useState } from 'react';

function QnA({ question, answer }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  
    const toggleAnswer = () => {
      setIsAnswerVisible(!isAnswerVisible);
    };
  
    return (
      <>
        <div className="question" onClick={toggleAnswer}>
          {isAnswerVisible ? <span>&#9660; </span> : <span>&#x25B2; </span>}
          <h3>{question}</h3>
          {/* 
            Using ternary operator, if true, it renders downward (left side)
            if false it renders upward (right hand)
          */}
        </div>
        {/* 
          If isAnswer is true on the left then answer is rendered
        */}
        {isAnswerVisible && <div className="answer">{answer}</div>}
      </>
    );
}

function QnAList(props) {
    return (
        <div className="question-container">
            {props.qnaList.map((qna, index) => (
                <QnA key={index} question={qna.question} answer={qna.answer} />
            ))}
        </div>
    );
}

export default QnAList;