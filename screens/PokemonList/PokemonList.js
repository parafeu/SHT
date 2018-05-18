import React from 'react';
import { Text, View, FlatList, ScrollView, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTitle from '../../components/CustomTitle';

import styles from './styles'

export default class PokemonList extends React.Component {

    static navigationOptions = {
        headerTitle: <CustomTitle arrow />
    }

    state = {
        nameList: [],
        filteredList: [],
        pickerOpen: false,
        selected: 0
    }

    componentDidMount = () => {
        let list = require('../../models/pokemon-fr.json');
        let pokemonList = []
        list.map((l, i) => {
            pokemonList.push({ key: "" + (i - 1), name: l });
        })
        this.setState({ nameList: pokemonList, filteredList: pokemonList });
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true} style={{ margin: 10 }}>
                <TouchableWithoutFeedback onPress={() => this.setState({ pickerOpen: !this.state.pickerOpen })}>
                    <View>
                        {
                            this.state.selected === 0 && (
                                <View style={styles.customPicker}>
                                    <Icon name={this.state.pickerOpen ? "angle-down" : "angle-up"} size={30} style={{ position: "absolute", left: 10 }} />
                                    <Text style={{ fontSize: 20 }}>Région</Text>
                                </View>
                            )
                        }
                        {
                            this.state.selected === 1 && (
                                <View style={styles.customPicker}>
                                    <Icon name={this.state.pickerOpen ? "angle-down" : "angle-up"} size={30} style={{ position: "absolute", left: 10 }} />
                                    <Text style={{ fontSize: 20 }}>Génération 1</Text>
                                </View>
                            )
                        }
                    </View>
                </TouchableWithoutFeedback>
                {
                    this.state.pickerOpen && (
                        <TouchableOpacity onPress={() => this.setState({ selected: 1, pickerOpen: false })} style={styles.customPicker}>
                            <ImageBackground source={require("../../images/banner-gen1.png")} style={{width: "100%", height: 50, justifyContent: "center", alignItems: "center"}}>
                                <Text style={{ fontSize: 20 }}>Kanto (Gen 1)</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }                
            </ScrollView>   
        )
    }
}