import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogoScreen from "./components/LogoScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import UserChoices from "./components/UserChoices";
import ProfileSetUp1 from "./components/ProfileSetUp1";
import ProfileSetUp2 from "./components/ProfileSetUp2";
import ProfileSetUp3 from "./components/ProfileSetUp3";
import ProfileSetUp4 from "./components/ProfileSetUp4";
import TutorSetUp1 from "./components/TutorSetUp1";
import TutorSetUp2 from "./components/TutorSetUp2";
import TutorSetUp3 from "./components/TutorSetUp3";
import TutorSetUp4 from "./components/TutorSetUp4";
import TutorSetUp5 from "./components/TutorSetUp5";
import SettingUp from "./components/SettingUp";
import VerifyIdentity from "./components/VerifyIdentity";
import VerifyIdentity1 from "./components/VerifyIdentity1";
import PendingApproval from "./components/PendingApproval";

import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="UserChoices" component={UserChoices}/>
        <Stack.Screen name="ProfileSetUp1" component={ProfileSetUp1}/>
        <Stack.Screen name="ProfileSetUp2" component={ProfileSetUp2}/>
        <Stack.Screen name="ProfileSetUp3" component={ProfileSetUp3}/>
        <Stack.Screen name="ProfileSetUp4" component={ProfileSetUp4}/>
        <Stack.Screen name="TutorSetUp1" component={TutorSetUp1}/>
        <Stack.Screen name="TutorSetUp2" component={TutorSetUp2}/>
        <Stack.Screen name="TutorSetUp3" component={TutorSetUp3}/>
        <Stack.Screen name="TutorSetUp4" component={TutorSetUp4}/>
        <Stack.Screen name="TutorSetUp5" component={TutorSetUp5}/>
        <Stack.Screen name="SettingUp" component={SettingUp}/>
        <Stack.Screen name="VerifyIdentity" component={VerifyIdentity}/>
        <Stack.Screen name="VerifyIdentity1" component={VerifyIdentity1}/>
        <Stack.Screen name="PendingApproval" component={PendingApproval}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}