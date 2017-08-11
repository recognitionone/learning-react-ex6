import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';

class StorePicker extends React.Component {
	render() {
		return(
				<form className="store-selector" >
					<h2>Please enter a store</h2>
					<input type="text" required placeholder="Store Name" />
				</form>
			);
	}
}

export default StorePicker;