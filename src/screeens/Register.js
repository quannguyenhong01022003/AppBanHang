import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { fontsize, colors } from '../constains'
import { validateEmail, validatePassword } from '../ultils/validations'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Register = () => {
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
                <AntDesign name="profile" size={100} style={{ color: colors.logoRegister }} />
            </View>

            {/* main */}
            <View style={styles.main}>
                <Text style={styles.textMail}>Email:</Text>
                <TextInput
                    placeholder='example@gmail.com'
                    onChangeText={(text) => {
                        seterrEmail(validateEmail(text) == true ? '' : 'Email is not correct format')
                    }} />
                <View style={{ height: 1, backgroundColor: 'black' }} />
                <Text style={{ color: 'red' }}>{errEmail}</Text>

                <Text style={styles.textMail}>Password:</Text>
                <TextInput
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={
                        (text) => { seterrPassword(validatePassword(text) == true ? '' : 'Password must be 6 character') }}
                />
                <View style={{ height: 1, backgroundColor: 'black' }} />
                <Text style={{ color: 'red' }}>{errPassword}</Text>

                <Text style={styles.textMail}>Retype password</Text>
                <TextInput
                    placeholder='Re-Enter your password'
                    secureTextEntry={true}
                    onChangeText={(text) => {

                    }} />
                <View style={{ height: 1, backgroundColor: 'black' }} />
                <Text style={{ color: 'red' }}>{errPassword}</Text>

                {
                    keybroadIsShow == false &&
                    <View>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.textLogin}>Register</Text>
                        </TouchableOpacity>

                    </View>
                }


            </View>

            {/* footer */}
            {
                keybroadIsShow == false &&
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' , marginTop: 20}}>
                        <View style={{ height: 1, backgroundColor: 'white', flex: 1 }} />
                        <Text style={styles.textFooter}>Use other method</Text>
                        <View style={{ height: 1, backgroundColor: 'white', flex: 1 }} />
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

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: colors.primary
    },
    // Header
    header: {
        flex: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

    },
    textHeader: {
        fontWeight: '900',
        fontSize: fontsize.h5,
        color: '#ffffff'
    },

    // Main
    main: {
        flex: 55,
        marginHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20
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
        marginTop: 30,
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
    },
    textFooter: {
        fontSize: fontsize.h3,
        marginHorizontal: 10,
        color: 'white'
    }
})