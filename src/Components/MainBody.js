import React, { Component } from 'react';
import { Grid, Paper } from 'material-ui';
import ReactSelect from './ReactSelect';
import DataTable from './DataTable';
import AnimalCard from './AnimalCard';
import InsertForm from './InsertForm';
import Buttons from './Buttons';

/*
The bulk of my changes happened here. Just grabbed some react components from a component library (material-ui), threw them in a components folder, imported them and rendered them.
*/

class MainBody extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            habitatInfo: [{
                name: '',
                kingdom: '',
                shortdesc: '',
                longdesc: '',
                food: '',
                exercise: '',
                image_url: '',
                dominant_species: ''
            }],
            animalList: [],
            isLoading: false,
        };
        
        this.queryAnimal = this.queryAnimal.bind( this );
        this.insertNewHabitat = this.insertNewHabitat.bind( this );
    }
    
    queryAnimal = (animalToQuery) =>
    {    
      this.setState();
        
    fetch("/habitats",
    {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({"name" : animalToQuery}),
    })
    .then(response => response.json())
    .then(data => {this.setState({ habitatInfo : data })})
    .catch((err) => {
        throw err
    });    
    }
    
    insertNewHabitat = (insertData) => 
    {
        this.setState();
        
        fetch("/habitats/insert",
    {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(insertData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => {
        throw err
    });
    }
    
    
    componentDidMount() {
      
      fetch('/habitats')
        .then(response => response.json())
        .then(data => {this.setState({ animalList : data, isLoading: false })})
    }
  render() {
    const { animalList, habitatInfo } = this.state;
    if(!this.props == undefined){
    return null; //You can change here to put a customized loading spinner 
  }  
      
    return (
        <div className="gridContainer" id="gridContainer">
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <Paper>
              <ReactSelect dataFromParent={animalList} query={this.queryAnimal}/>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <InsertForm insert={this.insertNewHabitat}/>
          </Grid>
          <Grid item xs={12}>
              <div className="row" id="animalCardDiv">    
                <AnimalCard habitatDataFromParent={habitatInfo}/>
              </div>
              <DataTable habitatDataFromParent={habitatInfo}/>
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default MainBody