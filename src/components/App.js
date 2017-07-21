import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };
  }
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange(event) {
    this.setState({value: event.target.value});
  }
  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(event) {
    event.preventDefault();
    this.setState({pilot: this.state.value});
    this.setState({value: ''});
  }
  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  async componentWillMount() {
    const starWarsData = await fetch('https://swapi.co/api/vehicles/')
    .then(data => data.json())
    .catch(err => console.log(err))
    console.log('data from api', starWarsData.results);
    let vehicles = starWarsData.results;
    this.setState({vehicles})
  }
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:
  render() {
    let vehicles = this.state.vehicles;
    let mappedvehicle = vehicles.map((vehicle) => {
      return (
        <div className="card-deck col-4 " key={vehicle.name}>
          <div className="card">
            <div className="card-block">
              <h2 className="card-title">Vehicle: {vehicle.name}
              </h2>
              <h5 className="card-title">Model: {vehicle.model}
              </h5>
              <div className="list-group-item">
                <div className="card-block">
                  <p className="lead">Specs</p>
                  <hr/>
                  <p>
                    Manufacturer: {vehicle.manufacturer}</p>
                  <hr/>
                  <p>
                    Class: {vehicle.vehicle_class}</p>
                  <hr/>
                  <p>
                    Passengers: {vehicle.passengers}</p>
                  <hr/>
                  <p>
                    Crew: {vehicle.crew}</p>
                  <hr/>
                  <p>
                    Length: {vehicle.length}</p>
                  <hr/>
                  <p>
                    Max speed: {vehicle.max_atmosphering_speed}</p>
                  <hr/>
                  <p>
                    Cargo Capacity: {vehicle.cargo_capacity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Star Wars</h1>
            <hr className="my-4"/>
            <p className="lead">The Vehicles of Star Wars</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block text-center">
            <h4 className="card-title">What is the name of your pilot?</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input onChange={this.handleNameChange} type="text" className="form" id="inputEmail3" placeholder="Enter your name" rows="3" value={this.state.value}/>
                <div className="card-block">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
            <h4>{this.state.pilot}</h4>
          </div>
        </div>
        <div className="row">
          {mappedvehicle}
        </div>
      </div>
    )
  }
}

export default App;
