import React, {useState, Component} from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number + 1)} />
        </View>
    );
};

class CounterClass extends Component {
    state = {
        number: 0
    };
    render() {
        return (
            <View>
                <Text>{this.state.number}</Text>
                <Button 
                    title="Tambah" 
                    onPress={() => this.setState({number: this.state.number + 1})} />
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>
                Materi Component Dinamis Dengan State
            </Text>
            <Text style={styles.titleSection}>Function Component (Hooks)</Text>
            <Counter />
            <Counter />
            <Counter />
            <Text style={styles.titleSection}>Class Component</Text>
            <CounterClass />
            <CounterClass />
            <CounterClass />
        </View>
    );
};

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    },
    titleSection: {
        marginTop: 20
    }
})