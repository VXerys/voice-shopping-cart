import { useRef, useEffect } from "react";
import { Animated, Image, StatusBar, View } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {colors} from '../../theme';
import {styles} from './SplashScreen.styles';
import {RootStackParamList} from '../../types';
type SplashScreenProps = {
   navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};


const SplashScreen:  React.FC<SplashScreenProps> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

   useEffect(() => {
      Animated.timing(fadeAnim, {
           toValue: 1,
           duration: 1000,
           useNativeDriver: true,
       }).start();

      const timeout = setTimeout(() => {
           navigation.replace('Onboarding'); 
         }, 2500);

      return () => clearTimeout(timeout);
   }, [fadeAnim, navigation]);

   return (
      <View style= {styles.container}>
         <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
         <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
            <Image source={require('../../assets/images/logo-splashscreen.png')} style={styles.logo} resizeMode="contain"/>
         </Animated.View>
      </View>
   );
};

export default SplashScreen;


