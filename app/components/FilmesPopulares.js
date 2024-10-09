import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import CardFilme from './CardFilme'
import { useNavigation } from '@react-navigation/native'

function FilmesPopulares({ filmes }) {
    const navigation = useNavigation()
    const handleClick = (filme) => {
        navigation.navigate('Filme', { filme })         
    }
    return (
        <View>
            <Text className='text-white text-xl mx-4 mb-5'>Filmes populares</Text>
            <FlatList
                data={filmes}
                keyExtractor={(item) => item.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CardFilme filme={item} handleClick={() => handleClick(item)}/>
                )}
            />
        </View>
    )
}

export default FilmesPopulares