import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../themes'
import { useNavigation } from '@react-navigation/native'

var height = Dimensions.get('screen').height;
var width = Dimensions.get('screen').width;
export default function ListaFilmes({ titulo, filmes }) {
    let tituloFilme = 'Filme Muito fodastico'
    const navigation = useNavigation()
    return (
        <View className='mb-8 space-y-4'>
            <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-white text-xl'>{titulo}</Text>
                <TouchableOpacity>
                    <Text style={styles.text} className='text-lg'>Ver mais</Text>
                </TouchableOpacity>
            </View>
            {/* Linha de filmes */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {filmes.map((filme, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Filme', filme)}>
                        <View className='space-y-1 mr-4'>
                            <Image className='rounded-3xl'
                                style={style.imagem}
                                source={require('../../assets/img2.jpeg')} />
                            <Text className='text-neutral-300 ml-1'>
                                {tituloFilme.length > 20 ? tituloFilme.substring(0, 20) + '...' : tituloFilme}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    imagem: {
      height: height*0.25,
      width: width*0.33,
      marginHorizontal: 10,
    },
})