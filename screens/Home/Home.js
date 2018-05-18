import React from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import CustomTitle from '../../components/CustomTitle'

import styles from './styles'

export default class Home extends React.Component{

    static navigationOptions = {
        headerTitle: <CustomTitle/>
    }

    render() {
        return (
            <ScrollView>
                <Text style={[styles.title, {marginTop: 20}]}>Bienvenu dans</Text>
                <Text style={[styles.title, {marginBottom: 10}]}>Shiny Hunting Tool</Text>
                <View>
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>
                            Démarrer une nouvelle shasse
                        </Text>
                        <Text style={styles.itemBody}>
                            Permet de séléctionner un pokémon pour commencer une nouvelle shasse.
                        </Text>
                    </View>
                    <View style={styles.itemButton}>
                        <Button
                            title="Démarrer"
                            color="#c2574f"
                            onPress={() => this.props.navigation.navigate("PokemonList")}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>
                            Continuer la shasse précédente
                        </Text>
                        <Text style={styles.itemBody}>
                            Permet de reprendre la shasse précédente.
                        </Text>
                    </View>
                    <View style={styles.itemButton}>
                        <Button
                            title="Continuer"
                            color="#c2574f"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}