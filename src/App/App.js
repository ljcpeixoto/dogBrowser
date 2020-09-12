import {ActivityPanels} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React from 'react';

import Detail from '../views/Detail';
import List from '../views/List';

const dogs = [
	'Snoopy',
	'Rin tin tin',
	'Lassie',
	'Totó',
	'Viralata',
	'Benji',
	'K-9000'
];

const AppBase = kind({
	name: 'App',

	render: (props) => (
		<ActivityPanels {...props}>
			<List>{dogs}</List>
			<Detail />
		</ActivityPanels>
	)
});

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};
