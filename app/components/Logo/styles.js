import {Dimensions} from 'react-native'

const imageWidth = Dimensions.get('window').width / 2;

import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    image: {
        width: imageWidth / 2,
    },
    text: {
       fontWeight: '600',
       fontSize: 28,
       letterSpacing: -0.5,
       marginTop: 20,
       color: '$white',
    }
});