import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, typography} from '../../theme';

const HomeScreen = () => {
   return (
      <SafeAreaView style= {styles.container}>
         <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
         <View style={styles.content}>
            <Text style={styles.title}>VoiceCart</Text>
            <Text style={styles.subtitle}>Selamat datang di VoiceCart!</Text>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
   },
   content: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
   },
   title: {
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.bold,
      color: colors.text,
      marginBottom: 10,
   },
   subtitle: {
      fontSize: typography.fontSize.lg,
      color: colors.textSecondary,
      textAlign: 'center', 

   }
});


export default HomeScreen;