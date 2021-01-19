function EmployeeDetails(props) {
    return (
      <div className="text-center">
        <img alt={props.name} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} />
        <h3>{props.firstName} {props.lastName}  </h3>
        <h4>{props.location}</h4>
        <h4>{props.email}</h4>
        <h4>{props.gender}</h4>
        <br/>
       <br/>
      </div>
       
    );
  }
  
  export default EmployeeDetails;