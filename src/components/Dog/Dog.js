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
       size: PropTypes.number
   },

    defaultProps: {
       size: 300
    },

    computed: {
       url: ({index, size}) => `//loremflickr.com/${size}/${size}/dog?random=${index}`
    },

    render: ({children, url, ...rest}) => {
       delete rest.index;
       delete rest.size;
        return (
            <div {...rest}>
                <img src={url} alt="A dog"/>
                <div>{children}</div>
            </div>
        )
    }
});

export default  DogBase;
export {DogBase as Dog};
