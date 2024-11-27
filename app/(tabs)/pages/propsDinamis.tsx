import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
  
const Story = (props: {judul: string, gambar: string}) => {
    return (
        <View style={{alignItems: 'center', marginRight: 20}}>
            <Image
                source={{
                    uri: props.gambar
                }}
                style={{width: 100, height: 100, borderRadius: 100 / 2}}
            />
            <Text style={{maxWidth: 100, textAlign: 'center'}}>{props.judul}</Text>
        </View>
    );
};

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis Dengan Props</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                    <Story 
                        judul="Youtube Channel" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4"
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.1" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.2" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.3" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.4" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.5" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.6" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.7" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.8" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.9" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                    <Story 
                        judul="Cara Menjadi Raja Iblis Bag.10" 
                        gambar="https://avatars.githubusercontent.com/u/86215416?v=4" 
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;