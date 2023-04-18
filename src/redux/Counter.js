import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slice";

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <TouchableOpacity onPress={() => dispatch(increment())}>
                <Text>Increment</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => dispatch(decrement())}>
                <Text>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}