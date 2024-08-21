import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View,
  FlatList,
  Button
} from 'react-native';



import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [CourseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGpalHandler() {
    setModalIsVisible(false);
  }

  // fired when the button is clicked 
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...CourseGoals, 
      {text: enteredGoalText, id:Math.random().toString()}
    ]);
    endAddGpalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='auto'/>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal'  
          color='#008b8b'
          onPress={startAddGoalHandler}
        />
        {/* input area to enter goal */}
        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGpalHandler}
        />
        {/* List of goals */}
        <View style={styles.goalsContainer}>
          <FlatList 
            data={CourseGoals} 
            renderItem={(itemData) => {
              return <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} 
              />;
            }}
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
appContainer: {
  paddingTop: 50,
  paddingHorizontal: 16,
  flex:1
},

goalsContainer: {
  flex: 5
}

});