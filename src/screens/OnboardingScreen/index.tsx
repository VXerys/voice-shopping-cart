import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ViewToken,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import Button from '../../components/Button';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: any;
}

const {width} = Dimensions.get('window');

const slides: OnboardingSlide[] = [
  {
    id: '1',
    title: 'Belanja dengan Suara',
    description:
      'Tambahkan produk ke keranjang hanya dengan suara. Mudah, cepat, dan praktis!',
    image: require('../../assets/images/logo-splashscreen.png'),
  },
  {
    id: '2',
    title: 'Kelola Budget Belanja',
    description:
      'Pantau pengeluaran belanja kamu secara real-time. Tetap terkontrol dengan budget yang sudah ditentukan.',
    image: require('../../assets/images/logo-splashscreen.png'),
  },
  {
    id: '3',
    title: 'Checkout Lebih Cepat',
    description:
      'Proses checkout yang simpel dan efisien. Selesaikan belanja kamu dalam hitungan detik.',
    image: require('../../assets/images/logo-splashscreen.png'),
  },
];

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace('Home');
    }
  };

  const handleSkip = () => {
    navigation.replace('Home');
  };

  const renderItem = ({item}: {item: OnboardingSlide}) => (
    <View style={styles.slide}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        scrollEventThrottle={16}
      />

      {renderDots()}

      <View style={styles.buttonContainer}>
        {currentIndex < slides.length - 1 ? (
          <>
            <Button title="Lewati" onPress={handleSkip} variant="ghost" />
            <Button title="Lanjut" onPress={handleNext} variant="primary" />
          </>
        ) : (
          <Button
            title="GET STARTED"
            onPress={handleNext}
            variant="primary"
            fullWidth
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  slide: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  contentContainer: {
    paddingTop: 80,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#3B82F6',
    width: 30,
  },
  inactiveDot: {
    backgroundColor: '#4B5563',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 56,
  },
});

export default OnboardingScreen;
