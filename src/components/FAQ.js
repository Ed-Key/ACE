import "../styles/main.css";
import QnAList from './QnAList';
import React from 'react';

function Faq() {
    const qnaList = [
        {
            question: " Can I still apply if I’m not a first-year student?",
            answer: `This program is intended for first-year students, 
                     however; second-year students who are behind in the 
                     necessary requirements for CS are encouraged to also 
                     apply as additional funding may become available to 
                     support these students. ACE++ will give preference 
                    to first-year students.`
        },
        {
            question: ` What if I did take one or two of these courses, but I 
                       dropped them?`,
            answer: `Students who dropped either Comp 11, Comp 15, or Comp 61 
                    are encouraged to apply. The only requirement is that 
                    the applicant had not received credit in these 
                    courses.`
        },
        {   
            question: ` Can I still work a separate job while receiving the 
                       stipend?`,
            answer: `The stipend is contingent on students being able to 
                    dedicate their full time to the program. Students who 
                    wish to work during the program will need written 
                    permission from the program facilitators along with a 
                    detailed explanation why it is important to work during
                    the program.`
        },
        {
            question: ` Is there a specific GPA requirement?`,
            answer: `No official GPA requirement is required. The goal of this 
                    program is to give access to the CS curriculum which can be 
                    difficult for students without time and experience with CS. 
                    Selected applicants will demonstrate a passion for becoming 
                    computer scientists.`
        },
        {
            question: ` When will I expect to hear back?`,
            answer: `Decisions will be posted by March 27th`
        },
        {
            question: ` What’s the housing arrangement?`,
            answer: `Students will be provided housing on campus. Scholars 
                    will most likely be roommates with other ACE++ scholars. 
                    More details to come.`
        },
        { 
            question: ` What if I have to leave campus for a personal or family 
                    emergency?`,
            answer: `ACE++ is a residential program and being on campus is a 
                    requirement. However, exceptions for a family emergency 
                    will be considered given the extent of the external 
                    circumstances. ACE++ understands that life happens and 
                    will work with each student to find the best solution for 
                    everyone involved. These will be handled on a case-by-case 
                    basis.`
        }
    ];

    return (
        <div className="Faq-container">
            <h1>FAQs</h1>
            <QnAList qnaList={qnaList} />
        </div>
    );
}

export default Faq;