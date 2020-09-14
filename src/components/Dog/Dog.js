import Spottable from '@enact/spotlight/Spottable';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import css from './Dog.module.less';

const DogBase = kind({
   name: 'Dog',

    styles: {
       css,
       className: 'dog'
    },

   propTypes: {
       children: PropTypes.string,
       index: PropTypes.number,
       onSelect: PropTypes.func,
       size: PropTypes.number
   },

    defaultProps: {
       size: 300
    },

    computed: {
       url: ({index, size}) => `//loremflickr.com/${size}/${size}/dog?random=${index}`
    },

    handlers: {
       onSelect: (ev, {index, onSelect}) => {
            if (onSelect) {
                onSelect({index});
            }
       }
    },

    render: ({children, onSelect, url, ...rest}) => {
       delete rest.index;
       delete rest.size;
        return (
            <div {...rest} onClick={onSelect}>
                <img src={url} alt="A dog"/>
                <div>{children}</div>
            </div>
        )
    }
});

const Dog = Spottable(DogBase);

export default  Dog;
export {Dog, DogBase};
