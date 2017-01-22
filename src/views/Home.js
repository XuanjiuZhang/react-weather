/**
 * Created by Administrator on 2017/1/21.
 */
import React, {
	Component
} from 'react';
import QueryItem from './queryComponent/QueryItem';
import DisplayForecast from './displayForecast/DisplayForecast';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData (argument) {
    const out = this;
    fetch('http://api.yytianqi.com/forecast7d?city=CH010100&key=mktjonpoe27e95r6').then(response => (
        response.json()
      )).then(weatherData => {console.log(weatherData); this.setState({ weatherData })} );
  } 

	render() {
    const displayProps = {
      data: this.state.weatherData
    }
		return (
      <div>
        <QueryItem />
        <DisplayForecast {...displayProps} />
      </div>
		);
	}
}

export default Home;