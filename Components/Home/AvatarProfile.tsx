import { Text, View } from "react-native";

interface AvatarProfileProps{
    firstName?: string,
    lastName?: string,
    isSingle?: boolean,
    favoriteQuotes?: string[]
}

function AvatarProfile({firstName, lastName, isSingle, favoriteQuotes} : AvatarProfileProps ) {

    return (
        <View>
            <Text>
                {firstName} {lastName}
            </Text>
           {isSingle ? <Text>Single</Text> : <Text>Hoin'</Text>}
           <Text>{favoriteQuotes}</Text>
        </View>
    )
}

export default AvatarProfile