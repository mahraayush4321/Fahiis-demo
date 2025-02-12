import { StyleSheet } from "react-native";

const fontSizeModifier = 1;
const lineHeightModifier = 1;
const langCodeModifiers = { ar: 0 };
export const typography = StyleSheet.create({
    heading1: {
        fontFamily: "PlusJakartaSans-SemiBold",
        fontWeight: 600,
        fontSize: 24 * fontSizeModifier,
        lineHeight: 30 * lineHeightModifier,
    },
    heading2: {
        fontFamily: "Inter-Medium",
        // fontWeight: 700,
        fontSize: 24 * fontSizeModifier,
        lineHeight: 50 * lineHeightModifier,
    },
    heading3: {
        fontFamily: "PlusJakartaSans-Bold",
        // fontWeight: 700,
        fontSize: 24 * fontSizeModifier,
        lineHeight: 50 * lineHeightModifier,
    },
    heading4: {
        fontFamily: "PlusJakartaSans-SemiBold",
        fontWeight: 600,
        fontSize: 24 * fontSizeModifier,
        lineHeight: 30.24 * lineHeightModifier,
    },
    heading5: {
        fontFamily: "Inter-Medium",
        fontWeight: 500,
        fontSize: 16 * fontSizeModifier,
        lineHeight: 19.36 * lineHeightModifier,
    },
    button1: {
        fontFamily: "PlusJakartaSans-SemiBold",
        fontWeight: 600,
        fontSize: 18 * fontSizeModifier,
        lineHeight: 22.68 * lineHeightModifier,
    },
    button2: {
        fontFamily: "PlusJakartaSans-SemiBold",
        fontWeight: 600,
        fontSize: 14 * fontSizeModifier,
        lineHeight: 20 * lineHeightModifier,
    },
    title1: {
        fontFamily: "PlusJakartaSans-SemiBold",
        fontWeight: 600,
        fontSize: 24 * fontSizeModifier,
        lineHeight: 30 * lineHeightModifier,
    },
    title2: {
        fontFamily: "PlusJakartaSans-SemiBold",
        fontWeight: 600,
        fontSize: 36 * fontSizeModifier,
        lineHeight: 45.36 * lineHeightModifier,
    },
    description1: {
        fontFamily: "PlusJakartaSans-Regular",
        fontWeight: 400,
        fontSize: 14 * fontSizeModifier,
        lineHeight: 20 * lineHeightModifier,
    },
    description2: {
        fontFamily: "PlusJakartaSans-Regular",
        fontWeight: 600,
        fontSize: 14 * fontSizeModifier,
        lineHeight: 20 * lineHeightModifier,
    },
    status1: {
        fontFamily: "PlusJakartaSans-Regular",
        fontWeight: 600,
        fontSize: 12 * fontSizeModifier,
        lineHeight: 15.12 * lineHeightModifier,
    },
    status2: {
        fontFamily: "Nunito-Regular",
        fontWeight: 400,
        fontSize: 13 * fontSizeModifier,
        lineHeight: 17.73 * lineHeightModifier,
    },
    label: {
        fontFamily: "PlusJakartaSans-Regular",
        fontWeight: 400,
        fontSize: 14 * fontSizeModifier,
        lineHeight: 20 * lineHeightModifier,
    },
    placeholder1: {
        fontFamily: "Inter-Regular",
        fontWeight: 400,
        fontSize: 16 * fontSizeModifier,
        lineHeight: 22 * lineHeightModifier,
    },
    placeholder2: {
        fontFamily: "PlusJakartaSans-Medium",
        fontWeight: 600,
        fontSize: 16 * fontSizeModifier,
        lineHeight: 20.16 * lineHeightModifier,
    },
    placeholder3: {
        fontFamily: "Nunito-Regular",
        fontWeight: 600,
        fontSize: 14 * fontSizeModifier,
        lineHeight: 19.1 * lineHeightModifier,
    },
});