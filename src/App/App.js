import Changeable from '@enact/ui/Changeable';
import {ActivityPanels} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React from 'react';
import PropTypes from 'prop-types';

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

	propTypes: {
		index: PropTypes.number,
		dog: PropTypes.number,
		onNavigate: PropTypes.func,
		onSelectDog: PropTypes.func
	},

	defaultProps: {
		index: 0,
		dog: 0
	},

	handlers: {
		onSelectDog: (ev, {onNavigate, onSelectDog}) => {
			if (onSelectDog) {
				onSelectDog({
					dog: ev.index
				});
			}

			if (onNavigate) {
				onNavigate({
					index: 1
				});
			}
		}
	},

	render: ({index, onNavigate, onSelectDog, dog, ...rest}) => (
		<ActivityPanels {...rest} index={index} onSelectBreadcrumb={onNavigate}>
			<List onSelectDog={onSelectDog}>{dogs}</List>
			<Detail name={dogs[dog]} />
		</ActivityPanels>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	Changeable({prop: 'dog', change:'onSelectDog'},
		MoonstoneDecorator(AppBase)
	)
);

export default App;
export {App, AppBase};
