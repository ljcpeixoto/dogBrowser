import kind from '@enact/core/kind';

const DogBase = kind({
   name: 'Dog',

   propTypes: {
       children: PropTypes.string,
       size: PropTypes.number
   },

    defaultProps: {
       size: 300
    }

});

