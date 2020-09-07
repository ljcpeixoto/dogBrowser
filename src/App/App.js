import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React from 'react';

import Dog from '../components/Dog/Dog';

const AppBase = kind({
	name: 'App',

	render: (props) => (
		<div className={props.className}>
			<Dog>
				Snoopy
			</Dog>
		</div>
	)
});

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};
