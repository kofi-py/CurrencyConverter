import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
       width: 19,
       marginRight: 11, 
    },
    text: {
        color: '$white',
        fontSize: 14,
        padding: 20,
        fontWeight: '300',
    },
});

export default styles;