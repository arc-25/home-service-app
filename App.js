import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Text } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };
 
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });



  return (
    <ClerkProvider
    // Cache={tokenCache}token
    publishableKey='pk_test_bWFqb3ItY2FyZGluYWwtODQuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
       
     
        <SignedIn>
        <NavigationContainer>
          <TabNavigation/>

        </NavigationContainer>
        </SignedIn>
    
        <SignedOut>
          <Login />
        </SignedOut>


        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
    
    
  },
});
