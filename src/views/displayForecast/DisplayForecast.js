/**
 * Created by Administrator on 2017/1/21.
 */
import React, {
	Component
} from 'react';

class DisplayForecast extends Component {
  constructor(props){
    super(props);
  }

	render() {
    const {data} = this.props;
    console.log(data);

    if(!data){
      return (
        <div>loading...</div>
        );
    }else{
      return (
      <div className="container">
        {data.data.cityName}
        {data.data.list.map(function (temp) {
          return temp.qw2;
        }).join()}
      </div>
      );
    }
	
	}
}

export default DisplayForecast;