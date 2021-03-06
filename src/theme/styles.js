import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        justifyContent: 'center'
    },

    displayText: {
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
   
   /*
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    */

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }

});

export default styles;
