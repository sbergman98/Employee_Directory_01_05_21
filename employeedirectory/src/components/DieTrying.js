import { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import EmployeeDetails from "./EmployeeDetails";
import KORD from "../images/kord_industries_logo.PNG";



class DieTrying extends Component {
  state = {
    result: [],
    search: ""
  };


  

  searchEmployees = event => {
    event.preventDefault();
    API.search()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));

  
  };

  searchGender = event => {
    event.preventDefault();
    
    const maleData = this.state.result.filter(person => person.gender === 'male' );
   
   console.log(this.state.result);

   this.setState({ result: maleData })

   console.log(maleData);

      
  };

  searchLocation = event => {
    event.preventDefault();
    
    const northAmerica = this.state.result.filter(world => world.location.country === 'Canada' || world.location.country === 'United States' || world.location.country === 'Mexico' );
   
   console.log(this.state.result);

   this.setState({ result: northAmerica })

   //console.log(maleData);

      
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search)
    console.log(this.state.result)
  };

  handleGender = event => {
    event.preventDefault();
    this.searchGender(this.state.search)
    console.log(this.state.result)
    
  };

  handleLocation = event => {
    event.preventDefault();
    this.searchLocation(this.state.search)
    console.log(this.state.result)
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };





  render() {
    
    return (
      

      <div className="App">
        <header className="App-header" >
          <img alt='KORD' style={{ width: "439", height: "183" }} src={KORD}/>
          <br></br><br></br>
          <p>
            Welcome, Click Below to Find Emloyees<br></br>
          
          </p>


    

          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.searchEmployees}
            handleGender={this.searchGender}
            handleLocation={this.searchLocation}
          />

       


          {this.state.result.map((employee, index) => (
            <EmployeeDetails
            picture={employee.picture.medium}
            firstName={employee.name.first}
            lastName={employee.name.last}
            location={employee.location.country}
            email={employee.email}
          />
           
          ))}
          

        </header>


      </div>

    );
  }

}

export default DieTrying;