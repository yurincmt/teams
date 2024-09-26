import { useState } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './style';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';

export function Groups() {

    const [groups, setGroups] = useState<string[]>(['Nome da turma', 'Nome do groups']);
    
    return (
        <View style={styles.container}>
            <Header />

            <Highlight
                title="Turmas"
                subtitle="jogue com sua turma!"
            />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <GroupCard title={item}/>
                )}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent={
                    <ListEmpty message="Que tal cadastrar a primeira turma agora?"/>
                }
            />

            <Button title="Criar uma nova turma"/>
        </View>
    );
}