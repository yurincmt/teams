import { UsersThree } from "phosphor-react-native";
import { View } from "react-native";

import { styles } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";

export function NewGroup() {
    return (
        <View style={styles.container}>

            <Header showBackButton/>
            
            <View style={styles.content}>

                <UsersThree
                    size={56}
                    style={styles.icon}
                />
                
                <Highlight 
                    title="Nova turma"
                    subtitle="crie a turma para adicionar pessoas"
                />

                <Input />

                <Button
                    title="Criar"
                />
            </View>
        </View>
    );
}