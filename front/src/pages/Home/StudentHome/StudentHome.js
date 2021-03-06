import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardOptions from "../../../components/CardOptions";
import HeaderHome from "../../../components/HeaderHome";
import style from "../style";

const StudentHome = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={style.containerHome}>
                <HeaderHome navigation={navigation} />
                <View style={style.containerMenus}>
                    <View style={style.cardUm}>
                        <CardOptions>
                            <Image source={require("../../../assets/icons/student-historic.png")} />
                            <Text>Histórico</Text>
                            <Text>Veja seu histórico de partidas</Text>
                        </CardOptions>
                    </View>
                    <View style={style.cardDois}>
                        <CardOptions>
                            <Image source={require("../../../assets/icons/teacher-student-search.png")} />
                            <Text>Busca</Text>
                            <Text>Busque por colegas, professores</Text>
                        </CardOptions>
                        <View style={style.cardTres}>
                            <CardOptions navigation={navigation} routeName="QuestionScreen">
                                <Image source={require("../../../assets/icons/student-play.png")} />
                                <Text>Jogar</Text>
                                <Text>Jogue com amigos</Text>
                            </CardOptions>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default StudentHome;