var React = require("react");

/*var WeatherMessage = React.createClass({
  render: function () {
    //var location = this.props.location;
    //var temperature = this.props.temperature;
    // Use Object destructuring to pull the prop variables and values out of the this.props Object
    var {temperature, location} = this.props;

    return (
      <div>
        <h3>The temperature in {location} is currently</h3>
        <p>{temperature} degrees!</p>
      </div>
    );
  }
});*/

var WeatherMessage = ({temperature, location}) => {
  return (
    <div>
      <h3 className="text-center">The temperature in {location} is currently {temperature} degrees!</h3>
    </div>
  );
};

module.exports = WeatherMessage;
