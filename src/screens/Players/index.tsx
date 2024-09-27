import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Players() {
    return (
        <View style={styles.container}>

            <Header
                showBackButton
            />

            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <Input
                placeholder="Nome do participante"
            />

            <ButtonIcon icon="add"/>
            <ButtonIcon icon="close"/>
        </View>
    );
}