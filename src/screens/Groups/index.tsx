import { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { styles } from './style';
import { GroupCard } from '../../components/GroupCard';

export function Groups() {

    const [groups, setGroups] = useState<string[]>(['Tekkno Only', 'Sex, drink & metal']);
    
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
            />

        </View>
    );
}