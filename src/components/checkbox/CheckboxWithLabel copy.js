import React from 'react';

export default class AumDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.onChange = this.onChange.bind(this);
  }

  isPositive(value){
    if(value>0)
      return <div>+{{value}} 万</div>;
    else if(value<0)
      return <div>-{{value}} 万</div>;
    else
      return <div>---</div>;
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.isPositive(value) : this.props.labelOff}
      </div>
    );
  }
}