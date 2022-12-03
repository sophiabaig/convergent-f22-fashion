import * as React from 'react';
import { View, Text } from 'react-native';

export default function ShoppingScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('Profile')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Shopping Screen</Text>
        </View>
    );
}