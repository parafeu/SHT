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

    images = [
        require("../../images/banner-gen1.png"),
        require("../../images/banner-gen2.png"),
        require("../../images/banner-gen3.png"),
        require("../../images/banner-gen4.png"),
        require("../../images/banner-gen5.png"),
        require("../../images/banner-gen6.png"),
        require("../../images/banner-gen7.png")
    ]

    componentDidMount = () => {
        let list = require('../../models/pokemon-fr.json');
        let pokemonList = []
        list.map((l, i) => {
            pokemonList.push({ key: "" + (i - 1), name: l });
        })
        this.setState({ nameList: pokemonList, filteredList: pokemonList });
    }

    getPickerItems = () => {
        let returnVal = [];
        for (let i = 1; i < 7; i++) {
            returnVal.push(
                <TouchableOpacity onPress={() => this.setState({ selected: i, pickerOpen: false })} style={styles.customPicker} key={"Gen" + i}>
                    <ImageBackground source={this.images[i-1]} style={{ width: "100%", height: 75, justifyContent: "center", alignItems: "center" }}>
                        {
                            i === 1 && <Text style={{ fontSize: 20 }}>Kanto (Gen 1)</Text>
                        }
                        {
                            i === 2 && <Text style={{ fontSize: 20 }}>Johto (Gen 2)</Text>
                        }
                        {
                            i === 3 && <Text style={{ fontSize: 20 }}>Hoenn (Gen 3)</Text>
                        }
                        {
                            i === 4 && <Text style={{ fontSize: 20 }}>Sinnoh (Gen 4)</Text>
                        }
                        {
                            i === 5 && <Text style={{ fontSize: 20 }}>Unys (Gen 5)</Text>
                        }
                        {
                            i === 6 && <Text style={{ fontSize: 20 }}>Kalos (Gen 6)</Text>
                        }
                        {
                            i === 7 && <Text style={{ fontSize: 20 }}>Alola (Gen 3)</Text>
                        }
                    </ImageBackground>
                </TouchableOpacity>
            )
        }
        return returnVal;
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
                            this.state.selected !== 0 && (
                                <ImageBackground source={this.images[this.state.selected-1]} style={{ width: "100%", height: 75, justifyContent: "center", alignItems: "center" }}>
                                    {
                                        this.state.selected === 1 && <Text style={{ fontSize: 20 }}>Kanto (Gen 1)</Text>
                                    }
                                    {
                                        this.state.selected === 2 && <Text style={{ fontSize: 20 }}>Johto (Gen 2)</Text>
                                    }
                                    {
                                        this.state.selected === 3 && <Text style={{ fontSize: 20 }}>Hoenn (Gen 3)</Text>
                                    }
                                    {
                                        this.state.selected === 4 && <Text style={{ fontSize: 20 }}>Sinnoh (Gen 4)</Text>
                                    }
                                    {
                                        this.state.selected === 5 && <Text style={{ fontSize: 20 }}>Unys (Gen 5)</Text>
                                    }
                                    {
                                        this.state.selected === 6 && <Text style={{ fontSize: 20 }}>Kalos (Gen 6)</Text>
                                    }
                                    {
                                        this.state.selected === 7 && <Text style={{ fontSize: 20 }}>Alola (Gen 7)</Text>
                                    }
                                </ImageBackground>
                            )
                        }
                    </View>
                </TouchableWithoutFeedback>
                {
                    this.state.pickerOpen && (
                        <View>{this.getPickerItems()}</View>
                    )
                }
            </ScrollView>
        )
    }
}
