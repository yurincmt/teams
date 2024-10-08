import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonFilter } from "../../components/ButtonFilter";
import { PlayerCard } from "../../components/PlayerCard";

export function Players() {
    const [teams, setTeams] = useState<string[]>(['Time A', 'Time B', 'Time C', 'Time D', 'Time E'])
    const [players, setPlayers] = useState<string[]>(['Yuri', 'Allana', 'José'])
    const [selectedTeam, setSelectedTeam] = useState<string>()

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

            <View style={styles.headerList}>

                <FlatList
                    data={teams}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <ButtonFilter
                            title={item}
                            isActive={item === selectedTeam}
                            onPress={() => setSelectedTeam(item)}
                        />
                    )}
                    horizontal
                />
                
                <Text style={styles.playersQty}>
                    {players.length}
                </Text>
            </View>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
                    />
                )}
            />

        </View>
    );
}