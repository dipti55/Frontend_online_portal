import React from 'react'

const StudentDashboard = () => {
    return (
        <>
        <div className="container">
     
  

    <div className="row">
    <div className="col-sm-4" >
    <label>
            <input type="radio" name="test" value="option1" checked={true} />
           <b> HTML</b>{" "}
          </label>
    </div>
    <div className="col-sm-4" >
    <label>
            <input type="radio" name="test" value="option1" checked={true} />
           <b>CSS</b>{" "}
          </label>   
    </div>
    <div className="col-sm-4" >
      <label>
            <input type="radio" name="test" value="option1" checked={true} />
           <b> JavaScript</b>{" "}
          </label>
    </div>
   
  </div>
</div>
        </>
    )
}

export default StudentDashboard
