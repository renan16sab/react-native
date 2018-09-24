import { createStackNavigator } from 'react-navigation';

import peoplepages from './src/pages/peoplepages';
import peopledetailpages from './src/pages/peopledetailpages';
export default createStackNavigator({
'Main':{
    screen: peoplepages
},
'peopledetail': {
  screen: peopledetailpages,
  navigationOptions: ({ navigation})  => {
    // const peoplename = navigation.states.params.people.name.first

    return({
      title: 'peopledetailpages',
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
       
  
  
      }

    });
  }
  
}

},{ 
  navigationOptions:{
    title: 'pessoas!',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderWidth: 1,
      borderBottomColor: 'white',

    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      // alignItems: 'center',
      marginLeft: 110,


    }
  }

   

});
// export default peoplepages;