import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ReactSelect extends React.Component {
  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    (selectedOption != null) ? this.props.query(selectedOption.value) : null;
  }
  
  optionsBuilder() {
      var options = [];
      for (var i=0; i<this.props.dataFromParent.length; i++) {
          var animalObject = { value: this.props.dataFromParent[i].name, label: this.props.dataFromParent[i].name }
          options.push(animalObject);
      }
      return options;
  }
  
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    var options = this.optionsBuilder();
      
    return (
      <Select
        name="form-field-name"
        value={value}
        placeholder="Choose your animal"
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default ReactSelect