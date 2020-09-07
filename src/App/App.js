import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React from 'react';


const AppBase = kind({
	name: 'App',

	render: (props) => (
		<div className={props.className}>
			<img src="//loremflickr.com/300/300/dog"  alt="A Dog"/>
			<div>Dog</div>
		</div>
	)
});

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};
