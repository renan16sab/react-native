import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
// import ReactNative from 'react-native';
// const StyleSheet =ReactNative.StyleSheet;
// const Text =ReactNative.Text;
// const View =ReactNative.View;

// import Header from '../components/Header';
import PeopleList from '../components/peoplelist';
export default class peoplepages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    };
  }

  componentDidMount(){
    axios
.get('https://randomuser.me/api/?nat=br&results=5')
.then(response => {
  const { results } = response.data;
  this.setState({
       peoples: results
  });

})
}

  
   


  
  render() {
    return (
      <View>
        {/* <Header title="Pessoas!"/> */}
        <PeopleList peoples={this.state.peoples}
                onPress={pageparams => {
                    this.props.navigation.navigate('peopledetail', pageparams);

                }}
                />
        {/* <Text> É milton ou nilton</Text> */}
      </View>
    );
  }
}


