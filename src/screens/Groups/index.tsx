import { View } from 'react-native';

import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { styles } from './style';
import { GroupCard } from '../../components/GroupCard';

export function Groups() {
    return (
        <View style={styles.container}>
            <Header />

            <Highlight
                title="Turmas"
                subtitle="jogue com sua turma!"
            />

            <GroupCard title="Galera do Teams"/>
        </View>
    );
}