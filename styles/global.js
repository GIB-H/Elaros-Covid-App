import { StyleSheet } from "react-native";


// by importing globalStyles, these styles can be used anywhere.
// this acts almost as a CSS file
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: "IBMPlexSerif-Bold",
        fontSize: 18,
        color: "#333",

    },
    paragraphText: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

// Useful colours:
// Elaros Banner: faaf41
// Elaros Dark Orange: ea531a
// Elaros Light Yellow: ffc340