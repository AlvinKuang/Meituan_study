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
                <View style={[styles.Part1_V,{marginTop:30}]}>
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
                        <View style={{flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#DDD8CE'}}>
                            <View style={{flex: 1}}>
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
                            <View
                                style={{flex: 1, flexDirection: 'column', borderRightWidth: 1, borderColor: '#DDD8CE'}}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.TitleStr, styles.marginLeft5, {
                                        color: '#ea6baf',
                                        marginTop: 14
                                    }]}>
                                        聚餐宴请 </Text>
                                    <Text style={[styles.CommonStr, styles.marginLeft5]}>
                                        朋友家人常聚聚 </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={{
                                            width: 35,
                                            height: 35,
                                            resizeMode: Image.resizeMode.cover,
                                            alignSelf: 'center',
                                            marginLeft: -30,
                                            marginTop: 5
                                        }}
                                        source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}>
                                    </Image>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={[styles.TitleStr, styles.marginLeft5, {
                                    color: '#fdb36f', marginTop: 8
                                }]}>
                                    名店抢购 </Text>
                                <Text style={[styles.CommonStr, styles.marginLeft5, {marginTop: 5}]}>
                                    还有 </Text>
                                <Text style={[styles.CommonStr, styles.marginLeft5, {marginTop: 5}]}>
                                    12:06:12分 </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.Part2_V}>
                    <View style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        borderColor: '#DDD8CE',
                        marginTop: 20,
                        height: 65,
                        flexDirection: 'row',
                        paddingTop: 10
                    }}>
                        <View style={[{flex: 1}]}>
                            <Text style={[styles.marginLeft10, {
                                color: '#f8886d',
                                marginTop: 5,
                                fontSize: 17,
                                fontWeight: '800'
                            }]}>
                                一元吃大餐 </Text>
                            <Text style={[styles.CommonStr, styles.marginLeft10]}> 新用户专享 </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Image
                                style={[styles.marginLeft10, {
                                    width: 120,
                                    height: 50,
                                    resizeMode: Image.resizeMode.cover
                                }]}
                                source={{uri: 'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}>
                            </Image>
                        </View>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            borderBottomWidth: 1,
                            borderColor: '#DDD8CE',
                            borderRightWidth: 1
                        }}>
                            <View
                                style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.marginLeft10, {
                                        color: '#e37161',
                                        marginTop: 5,
                                        fontSize: 17,
                                        fontWeight: '800'
                                    }]}>
                                        撸串节狂欢 </Text>
                                    <Text style={[styles.CommonStr, styles.marginLeft10, {color: '#c5c5c7'}]}>
                                        烧烤6.6元起 </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={[styles.marginLeft20, {
                                            width: 60,
                                            height: 55,
                                            resizeMode: Image.resizeMode.cover
                                        }]}
                                        source={{uri: 'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}>
                                    </Image>
                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTopWidth: 1,
                                borderColor: '#DDD8CE'
                            }}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.marginLeft10, {
                                        color: '#81b333',
                                        marginTop: 5,
                                        fontSize: 17,
                                        fontWeight: '800'
                                    }]}>
                                        0元餐来袭 </Text>
                                    <Text style={[styles.CommonStr, styles.marginLeft10, {color: '#c5c5c7'}]}>
                                        免费吃喝玩乐购 </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={[styles.marginLeft20, {
                                            width: 60,
                                            height: 55,
                                            resizeMode: Image.resizeMode.cover
                                        }]}
                                        source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}>
                                    </Image>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: '#DDD8CE'
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#DDD8CE'
                            }}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.marginLeft10, {
                                        color: '#f69d42',
                                        marginTop: 5,
                                        fontSize: 17,
                                        fontWeight: '800'
                                    }]}>
                                        毕业旅行 </Text>
                                    <Text style={[styles.CommonStr, styles.marginLeft10, {color: '#c5c5c7'}]}>
                                        选好酒店才安心 </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={[styles.marginLeft20, {
                                            width: 60,
                                            height: 55,
                                            resizeMode: Image.resizeMode.cover
                                        }]}
                                        source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}>
                                    </Image>
                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTopWidth: 1,
                                borderColor: '#DDD8CE'
                            }}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.marginLeft10, {
                                        color: '#6792ea',
                                        marginTop: 5,
                                        fontSize: 17,
                                        fontWeight: '800'
                                    }]}>
                                        热门团购 </Text>
                                    <Text style={[styles.CommonStr, styles.marginLeft10, {color: '#c5c5c7'}]}>
                                        大家都在买什么 </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={[styles.marginLeft20, {
                                            width: 60,
                                            height: 55,
                                            resizeMode: Image.resizeMode.cover
                                        }]}
                                        source={{uri: 'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}>
                                    </Image>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.Part3_V, styles.text_box2]}>
                    <View style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        borderColor: '#DDD8CE',
                        marginTop: 20,
                        flexDirection: 'row',
                    }}>
                        <View style={[{flex: 1}, styles.text_box]}>

                        </View>
                        <View style={[{flex: 1, flexDirection: 'column'}, styles.text_box]}>
                            <View style={[{flex: 1, flexDirection: 'row'}, styles.text_box]}>
                                <View style={[{flex: 1}, styles.text_box]}>

                                </View>
                                <View style={[{flex: 1}, styles.text_box]}>

                                </View>
                            </View>
                            <View style={[{flex: 1, flexDirection: 'row'}, styles.text_box]}>
                                <View style={[{flex: 1}, styles.text_box]}>

                                </View>
                                <View style={[{flex: 1}, styles.text_box]}>

                                </View>
                            </View>
                        </View>
                    </View>
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
        flexDirection: 'column',
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
        borderLeftWidth: 1,
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

    text_box: {
        borderWidth: 1,
        borderColor: 'red'
    },
    text_box2: {
        borderWidth: 1,
        borderColor: 'blue'
    },
});

AppRegistry.registerComponent('Meituan', () => Meituan);
