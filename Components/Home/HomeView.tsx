import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import HomeViewModel from "./HomeViewModel";
import AvatarProfile from './AvatarProfile'

interface HomeViewProps {
    homeViewModel : HomeViewModel 
}



function HomeView({homeViewModel = new HomeViewModel()}:HomeViewProps) {
    const [thisFirstName, updatethiFirstName] = useState('')
    const [thisLastName, updatethiLastName] = useState('')
    const mockData = {
        firstName: 'Ryan',
        lastName: 'Braun',
        isSingle: true,
    }

    return (
        <View>
          <Button testID='2' title="Button" onPress={homeViewModel.onClick}/>
          <AvatarProfile firstName={mockData.firstName} lastName={mockData.lastName} isSingle={mockData.isSingle} />
        </View>
    )
}

export default HomeView