
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image
} from 'react-native';

import { useState } from 'react';



function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

     // responsible for fetching user input as user types them
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    // pass finction manually to pass the enteredGoalText
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); 
        setEnteredGoalText(''); // to clear whenever we add a goal
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Course Goal!' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color= '#008080'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color= '#008080'/>
                    </View>
                </View>

            </View>
        </Modal>
    );
    }

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        backgroundColor: '#5f9ea0'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 16,
        borderRadius: 6,
        color: "white"
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});