import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Hero from '../assets/Hero.png'

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        setTimeout(() => {
            navigation.setOptions({
                headerShown: false,
            });
        }, 2000);
    }, []);
    return (
        <SafeAreaView className="h-screen w-screen relative  ">
            <View className='w-full h-full  pt-8 '>
                <View className='px-400  px-6 flex-row gap-x-4  items-center'>
                    <View className='bg-black h-12 w-12  items-center justify-center rounded-full flex-row'>
                        <Text className='text-[#4bb8cb] border border-white font-semibold text-lg'>Go</Text>
                    </View>
                    <Text className='text-2xl font-semibold'>Travel</Text>
                </View>

                {/* sectoin section */}
                <View className='px-6 mt-10 flex-col space-y-1 '>
                    <Text className='text-4xl tracking-wider text-gray-700'>Enjoy the trip with</Text>
                    <Text className='text-[#4bb8cb] text-3xl font-semibold'>Good Moments</Text>
                    <Text className='text-slate-600 pt-2  '>"Traveling broadens horizons, offering the opportunity to explore diverse cultures, savor new experiences, and create lasting memories." </Text>
                </View>

                {/* image section */}
                <View className='w-96 h-96 absolute bottom-32 -right-40 mx-auto rounded-full bg-[#4bb8cb]'></View>
                <View className='w-96 h-96 absolute -left-40 -bottom-20 mx-auto rounded-full bg-orange-400'></View>
                <View className=' flex-row h-[550px] absolute -bottom-8 left-0 w-full'>
                    <Image source={Hero} className='w-full contrast-200 h-full   object-cover' />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;