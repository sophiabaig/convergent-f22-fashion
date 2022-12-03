import React from 'react';
import { Stylesheet, Text, View, Image, SafeAreaView, Pressable, Button} from 'react-native';

//style={{alignItems: 'center', backgroundcolor: 'green', borderRadius: 5}
const images = [
    {
        id: "0", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71tbBtDLf2L._AC_UL1500_.jpg", 
        name: "Shoes",
        cost: "$100"
    },
    {
        id: "1",
        image:  "https://storage.googleapis.com/share-gdicdn/images/product/100054018/100054018_26S_alt4_1332x2000.jpg",
        name: "Sweater",
        cost: "$80"
    },
    {
        id: "2", 
        image: "https://cdnd.lystit.com/photos/2012/05/01/vince-black-leather-pants-product-2-3405878-680594015.jpeg", 
        name: "Leather Pants",
        cost: "$75"
    },
];

export default Cart = () => {
    return (
        <>
            <Text style={{ textAlign: "center", fontSize: 30, paddingTop: 50, paddingLeft: 25}}>
                Cart
            </Text>
            {images.map((item) => (
                <Pressable
                    key={item.id}
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <SafeAreaView style={{ margin: 10}}>
                        <Image
                            style={{ width: 120, height: 150, marginTop: 20, resizeMode: "contain"}}
                            source={{ uri: item.image}}
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        <Text style={{ fontSize: 15}} > {item.cost} </Text>
                    </SafeAreaView>
                </Pressable>
            ))}
            
                <Button
                    title="Checkout: $255"
                /> 
            </>
    );
                            };                            
    

// const styles = Stylesheet.create({
//     button: {
//         alignItems: 'center', 
//         backgroundColor: 'green', 
//         borderRadius: '5',
//     },
// });


//export default Cart;