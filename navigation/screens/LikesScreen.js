import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Item from './LikedItemPage';



export default function LikedPage() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Item
                    image="https://www.bulkapparel.com/image/alpha-colors/fashion-wear/g570_10.jpg"
                    name="Shirt"
                    price="$10"
                />
                <Item
                    image="https://th.bing.com/th/id/R.a505141330a6f9aa96f5cdfec1943735?rik=6E44ZOKhBR2%2fww&riu=http%3a%2f%2fbernardhats.com%2fwp-content%2fuploads%2f2016%2f11%2fChurchill-Suede-Fedora-04.jpg&ehk=NhyoIw1DdPxid%2fbOZLenX8Q%2bs3IL0X7XheXS9Kst8w0%3d&risl=&pid=ImgRaw&r=0"
                    name="Hat"
                    price="$20"
                />
                <Item
                    image="https://th.bing.com/th/id/OIP.Y9w0BdylwqJeQW3_mGxmXAHaJ4?pid=ImgDet&rs=1"
                    name="Pants"
                    price="$25"
                />
                <Item
                    image="https://i5.walmartimages.com/asr/c7d94e45-2474-47f9-9174-dc19f6ef9d33_1.49d6cac7a39cda7e093deda837925d6b.jpeg"
                    name="Pajamas"
                    price="$30"
                />
                <Item
                    image="https://th.bing.com/th/id/OIP.RJJdIZel0hDTs94FI9Wv-gHaJQ?pid=ImgDet&rs=1"
                    name="Cargo Pants"
                    price="$40"
                />
            </ScrollView>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text1: {
        fontSize: 40,
        paddingTop: 45,
        paddingLeft: 115,
    }
});