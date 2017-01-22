/**
 * Created by Administrator on 2017/1/21.
 */
import React, {
	Component
} from 'react';

class queryItem extends Component {
  constructor(props){
    super(props);
    this.handleCityNameChange = this.handleCityNameChange.bind(this);
    this.state = {
      cityName: ''
    };
    console.log('init home');
  }

  handleCityNameChange (e) {
    this.setState({
      cityName: e.target.value
    });
  }

	render() {
    const {cityName} = this.state;
		return (
      <div className="container">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="cityName" className="col-sm-2 col-sm-offset-1 control-label">输入城市名称</label>
            <div className="col-sm-4">
              <input type="text" 
              className="form-control col-md-4" id="cityName"
              value={cityName}
              onChange={this.handleCityNameChange}
               placeholder="city" />
            </div>
            <div className="col-sm-2">
              <button type="button" className="btn btn-primary">查询！</button>
            </div>
          </div>
        </form>
      </div>
		);
	}
}

export default queryItem;