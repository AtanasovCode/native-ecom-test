import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="flex-1 pt-10">
            <Text className="text-3xl text-white">Home</Text>
        </SafeAreaView>
    );
}

export default Home;