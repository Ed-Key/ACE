import React from 'react';


const currentYear = new Date().getFullYear();

const events = [
  { 
    width: 200, 
    endDate: new Date(`${currentYear}-3-17`),
    title: "Application Due",
    dueDate: `March 17, ${currentYear}`
  },
  { 
    width: 200, 
    endDate: new Date(`${currentYear}-3-27`),
    title: "Acceptance Notification",
    dueDate: `March 27, ${currentYear}`
  },
  { 
    width: 250, 
    endDate: new Date(`${currentYear}-4-14`),
    title: "Attendance Confirmation",
    dueDate: `April 14, ${currentYear}`
  },  
  { 
    width: 400, 
    endDate: new Date(`${currentYear}-5-24`),
    title: "Program Starts",
    dueDate: `May 24, ${currentYear}`
  },
  { 
    width: 600, 
    endDate: new Date(`${currentYear}-8-11`),
    title: "Program Ends",
    dueDate: `August 11, ${currentYear}`
  },
];




function getProgress(width, endDate){
  const startDate = new Date();
  const diffinDays = Math.ceil((endDate - startDate)/(1000 * 60 * 60 * 24));

  let progress = ((width - diffinDays) / width) * 100;
  
  return progress;
}

function Timeline() {
  const currentBar = [1, 0, 0, 0, 0];

  function renderProgressBar(event, index, array) {
    const progress = getProgress(event.width, event.endDate);
    const isLastBar = index === array.length - 1;
  
    if (progress >= 100) {
      currentBar[index+1] = 1;
    }
  
    if (currentBar[index] === 1) {
      return (
        <React.Fragment key={index}>
          <progress
            style={{ width: `${event.width}px` }}
            max={100}
            value={getProgress(event.width, event.endDate)}
            ref={isLastBar ? (el) => { el?.scrollIntoView() } : null}
          />
          <div className={`circle ${progress >= 100 ? 'filled' : ''}`} />
        </React.Fragment>
      );
    } else {
      return renderBar(event, index);
    }
  }

  function renderBar(event, index){
    return(
      <React.Fragment key={index}>
        <progress
          style={{width: `${event.width}px`}}
          max={100}
          value={0}
        />
        <div className="circle"/>
      </React.Fragment>
    );
  }

  function renderEvent(event, index){
    return(
      <React.Fragment key={index}>
        <div className="event-container">
          <h2 id="event-title">{event.title}</h2>
          <h2 id="event-date">{event.dueDate}</h2>
        </div>
      </React.Fragment>
    );
  }


  return (
    <>
      <div className="timeline-container">
        <div className="timeline-header">
          <h1>Timeline</h1>
        </div>
        <div className="timeline-box">
          <div className="progress-events-container">
            <div className="progress-bar-container">
              {events.map(
                renderProgressBar
                )}
            </div>
            <div className="events-container">
              {events.map(renderEvent)}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Timeline;

