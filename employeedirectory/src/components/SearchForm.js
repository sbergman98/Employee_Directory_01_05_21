function searchEmployees(props) {
    return (
      <form>
        <div className="form-group">
        <button onClick={props.handleFormSubmit} className="btn btn-warning">
            Search For Employee
          </button>
        <br/>
        <br/>
        And then narrow your serach down.
        <br/>
         <br/>
        <button onClick={props.handleGender} className="hidden btn btn-warning">
            Filter For Male Employees
          </button>
         <br/>
         <br/>
         <button onClick={props.handleLocation} className="hidden btn btn-warning ">
            Filter for North American Employees
          </button>
         
         
        </div>
      </form>
    );
  }
  
  export default searchEmployees;
  