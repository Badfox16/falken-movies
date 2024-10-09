import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import FilmesPopulares from '../components/FilmesPopulares'
import { styles } from '../themes'
import ListaFilmes from '../components/ListaFilmes'

const ios = Platform.OS === 'ios'
function TelaHome() {
const [populares, setPopulares] = useState([1,2,3])
const [melhores, setMelhores] = useState([1,2,3])
const [brevemente, setBrevemente] = useState([1,2,3])
    return (
        <View className="flex-1 bg-neutral-800">
            {/* Barra de Pesquisa e Logo */}
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className='flex-row justify-between items-center mx-4'>
                    <Bars3CenterLeftIcon size={24} color="white" strokeWidth={2} />
                    <Text className="text-white font-bold text-2xl">
                    <Text style={styles.text}>Falken</Text>
                     Movies</Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={24} color="white" strokeWidth={2} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Carrosel para filmes populares */}
                <FilmesPopulares filmes={populares}/>

                {/* Linha para os melhores filmes */}
                <ListaFilmes titulo="Melhores filmes" filmes={melhores}/>

                {/* Linha para filmes em breve */}
                <ListaFilmes titulo="Em breve" filmes={brevemente}/>
            </ScrollView>
        </View>
    )
}

export default TelaHome