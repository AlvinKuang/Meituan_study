/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Meituan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Part1_V}>
                    {/**** 第一部分左边框 ****/}
                    <View style={styles.Part1_LeftV}>
                        <Text style={[styles.TitleStr, styles.marginLeft10, {color: 'lightgreen', marginTop: 14}]}>
                            我们约吧 </Text>
                        <Text style={[styles.CommonStr, styles.marginLeft10, {marginTop: 18}]}> 恋爱家人好朋友 </Text>
                        <Image
                            style={[styles.marginLeft10, {width: 100, height: 100, resizeMode: Image.resizeMode.cover}]}
                            source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}>
                        </Image>
                    </View>
                    {/**** 第一部分右边框 ****/}
                    <View style={styles.Part1_RightV}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 1, borderBottomWidth: 0.5, borderColor: '#DDD8CE'}}>
                                <Text style={[styles.TitleStr, styles.marginLeft30, {color: 'red', marginTop: 14}]}>
                                    低价超值 </Text>
                                <Text style={[styles.CommonStr, styles.marginLeft30, {marginTop: 18}]}> 十元惠生活 </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={[styles.marginLeft10, {
                                        width: 55,
                                        height: 55,
                                        marginTop: 14,
                                        resizeMode: Image.resizeMode.cover
                                    }]}
                                    source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}>
                                </Image>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.TitleStr, styles.marginLeft5, {
                                        color: '#F742AB',
                                        marginTop: 14
                                    }]}>
                                        聚餐宴请 </Text>
                                    <Text style={[styles.CommonStr, styles.marginLeft5]}>
                                        朋友家人常聚聚 </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            resizeMode: Image.resizeMode.cover,
                                            alignSelf: 'center',
                                            marginLeft: -30,
                                        }}
                                        source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}>
                                    </Image>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.CommonStr}>
                                    5
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.Part2_V}>

                </View>
                <View style={styles.Part3_V}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    Part1_V: {
        flex: 2,
        flexDirection: 'row',
    },

    Part2_V: {
        flex: 3,
        flexDirection: 'row',
    },

    Part3_V: {
        flex: 2,
        flexDirection: 'row',
    },

    CommonStr: {
        fontSize: 12,
    },

    TitleStr: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    Part1_LeftV: {
        flex: 1,
        // alignItems:'center',
        paddingTop: 20,
        borderColor: '#DDD8CE',
        borderBottomWidth: 1,
    },

    Part1_RightV: {
        flex: 2,
        paddingTop: 20,
        borderColor: '#DCD7CD',
        borderLeftWidth: 0.5,
        borderBottomWidth: 1,
        flexDirection: 'column',
    },

    marginLeft5: {
        marginLeft: 5,
    },

    marginLeft10: {
        marginLeft: 10,
    },

    marginLeft20: {
        marginLeft: 20,
    },

    marginLeft30: {
        marginLeft: 30,
    },
});

AppRegistry.registerComponent('Meituan', () => Meituan);
