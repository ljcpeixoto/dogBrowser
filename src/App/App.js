import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Repeater from '@enact/ui/Repeater';
import React from 'react';

import Dog from '../components/Dog/Dog';

const dogs = [
	"Snoopy",
	"Rin tin tin",
	"Lassie",
	"Totó",
	"Viralata",
	"Benji",
	"K-9000"
];

const AppBase = kind({
	name: 'App',

	render: (props) => (
		<div className={props.className}>
			<Repeater childComponent={Dog} indexProp="index">
				{dogs}
			</Repeater>
		</div>
	)
});

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};
