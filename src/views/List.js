import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Repeater from '@enact/ui/Repeater';

import Dog from '../components/Dog';

const ListBase = kind({
    name: 'List',

    propTypes: {
        children: PropTypes.array
    },

    render: ({children, ...rest}) => (
        <Panel {...rest}>
            <Header title="Dogs!!!" />
            <Repeater childComponent={Dog} indexProp="index">
                {children}
            </Repeater>
        </Panel>
    )

});

export default ListBase;
export {ListBase as List, ListBase};
