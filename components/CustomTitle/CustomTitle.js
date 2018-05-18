import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';

import styles from './styles';

export default class CustomTitle extends React.Component{

    render(){
        let left;
        if(this.props.arrow){
            left = ( Dimensions.get('screen').width / 2 ) - 95;
        }else{
            left = ( Dimensions.get('screen').width / 2 - 40);
        }
        return(
            <View style={[styles.container, { left: left}]}>
                <Image
                    source={require("../../images/logo-flat.png")}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
        )
    }
}