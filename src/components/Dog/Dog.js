import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

const DogBase = kind({
   name: 'Dog',

   propTypes: {
       children: PropTypes.string,
       size: PropTypes.number
   },

    defaultProps: {
       size: 300
    },

    computed: {
       url: (props) => "//loremflickr.com/" + props.size + "/" + props.size + "/dog"
    },

    render: (props) => (
        <div>
            <img src={props.url} alt="A dog" />
            <div>{props.children}</div>
        </div>
    )

});

export default  DogBase;
export {DogBase as Dog};
