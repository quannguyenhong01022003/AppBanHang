import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { colors, fontsize } from '../constains'
import { validateEmail, validatePassword } from '../ultils/validations'
const Login = () => {
    const [keybroadIsShow, setkeybroadIsShow] = useState(false)
    const [errEmail, seterrEmail] = useState("")
    const [errPassword, seterrPassword] = useState("")

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeybroadIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeybroadIsShow(false)
        })
    })
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.textHeader}>Already have an </Text>
                    <Text style={styles.textHeader}>Accout?</Text>
                </View>
                <AntDesign name="profile" size={100} style={{ color: colors.primary }} />
            </View>

            {/* main */}
            <View style={styles.main}>
                <Text style={styles.textMail}>Email:</Text>
                <TextInput placeholder='example@gmail.com'
                    onChangeText={(text) => {
                        seterrEmail(validateEmail(text) == true ? '' : 'Email is not correct format')
                    }} />
                <View style={{ height: 1, backgroundColor: 'black', marginBottom: 10 }} />
                <Text style={{ color: 'red' }}>{errEmail}</Text>
                <Text style={styles.textMail}>Password:</Text>
                <TextInput placeholder='Enter your password'
                    onChangeText={(text) => {
                        seterrPassword(validatePassword(text) == true ? '' : 'Password must be 6 character')
                    }} />
                <View style={{ height: 1, backgroundColor: 'black' }} />
                <Text style={{ color: 'red' }}>{errPassword}</Text>
                {
                    keybroadIsShow == false &&
                    <View>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.textLogin}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                            <Text style={styles.textMail}>New user?   </Text>
                            <TouchableOpacity>
                                <Text style={[styles.textMail, { textDecorationLine: 'underline' }]}>Resgister</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }


            </View>

            {/* footer */}
            {
                keybroadIsShow == false &&
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
                        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
                        <Text style={styles.textFooter}>Use other method</Text>
                        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                        <AntDesign name="facebook-square" size={40} style={{ color: colors.facebook }} />
                        <View style={{ width: 20 }} />
                        <AntDesign name="google" size={40} style={{ color: colors.google }} />
                    </View>
                </View>
            }




        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 100
    },
    // Header
    header: {
        flex: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

    },
    textHeader: {
        fontWeight: '900',
        fontSize: fontsize.h5,
        color: '#000000'
    },

    // Main
    main: {
        flex: 50,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    textMail: {
        fontSize: fontsize.h2,
        color: colors.primary,
        marginTop: 20
    },
    btnLogin: {
        backgroundColor: colors.primary,
        width: '50%',
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 10
    },
    textLogin: {
        color: 'white',
        padding: 9,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: fontsize.h2
    },

    // Footer
    footer: {
        flex: 20,
        backgroundColor: '#ffffff'
    },
    textFooter: {
        fontSize: fontsize.h3,
        marginHorizontal: 10,
        color: 'black'
    }
})