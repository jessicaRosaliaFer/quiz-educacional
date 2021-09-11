import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CardOptions from "../../components/CardOptions";
import HeaderHome from "../../components/HeaderHome/";
import style from "./style";

const Home = () => {

    return (
        <SafeAreaView>
       <ScrollView>
        <View style={style.containerHome}>
            <HeaderHome />
            <View style={style.cardUm}>
                <CardOptions>
                    <Image source={require("../../assets/icons/prof-cadastroQuestoes.png")} />
                    <Text>Questões</Text>
                    <Text>Gerenciar banco</Text>
                </CardOptions>
            </View>
            <View style={style.cardDois}>
                <CardOptions>
                    <Image source={require("../../assets/icons/prof-busca.png")} />
                    <Text>Busca</Text>
                    <Text>Buscar por colegas, professores</Text>
                </CardOptions>
                <View style={style.cardTres}>
                    <CardOptions >
                        <Image source={require("../../assets/icons/prof-duelos.png")} />
                        <Text>Duelos</Text>
                        <Text>Gerenciar competições</Text>
                    </CardOptions>
                </View>

            </View>
        </View >
        </ScrollView>
        </SafeAreaView>
    )
}
export default Home;