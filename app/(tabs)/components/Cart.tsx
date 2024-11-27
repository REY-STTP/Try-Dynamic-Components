import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Cart = (props: { quantity: number }) => {
    return (
        <View>
            <View style={styles.cartWrapper}>
                <Image source={require('../assets/icons/cart.png')} style={styles.iconCart} />
                <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.notif}>Keranjang Belanja Anda</Text>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#439BD1',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 40
    },
    iconCart: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 12, 
        color: '#777777', 
        fontWeight: '700', 
        marginTop: 8
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 5,
        borderRadius: 25,
        width: 25,
        height: 25,
        position: 'absolute',
        top: 0,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },    
})