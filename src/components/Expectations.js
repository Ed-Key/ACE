import React from 'react';


function Expect({expect}){
    return(
        <>
            
            <div className="expect">
                <div className="expectback"/>
                <h2>{expect}</h2>
            </div>
           
        </>
    );
}

function Expectations(props){

    const expecs = [
        "Students must not hold on additional position/job",
        "Students must attend weekly study halls",
        "Students are expected to be on campus for the duration of the program",
        "Students must attend all class sessions",
        "Students must meet their assigned staff as part of a weekly check in"

    ];

    return (
        <>
            <div className="expectations">
                <div className="expectations-title">
                    <h1>Program Expectations</h1>
                </div>
                <div className="expectations-list">
                    {expecs.map((string, index) => (
                        <Expect key={index} expect={string}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Expectations;