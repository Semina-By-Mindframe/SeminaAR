import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
  StyleSheet,
  ScrollView,
} from 'react-native';

const plants = [
  {
    id: 1,
    name: 'Monstera',
    height: '120cm',
    width: '80cm',
    description: 'Popular tropical plant with unique split leaves.',
    glb: 'https://raw.githubusercontent.com/ManmeetVirdi17/seminaPlantImageTesting/main/monstera.glb',
    usdz: '',
  },
  {
    id: 2,
    name: 'Cactus',
    height: '60cm',
    width: '30cm',
    description: 'Low maintenance desert plant.',
    glb: 'https://raw.githubusercontent.com/ManmeetVirdi17/seminaPlantImageTesting/main/cactus.glb',
    usdz: '',
  },
];

const openAR = (plant: any) => {
  if (Platform.OS === 'ios') {
    Linking.openURL(plant.usdz);
  } else {
    const url = `https://arvr.google.com/scene-viewer/1.0?file=${plant.glb}&mode=ar_preferred&title=${plant.name}`;
    Linking.openURL(url);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌿 SeminaAR</Text>
      <Text style={styles.subheader}>Place plants in your space</Text>
      <ScrollView>
        {plants.map(plant => (
          <View key={plant.id} style={styles.card}>
            <View style={styles.cardInfo}>
              <Text style={styles.plantName}>{plant.name}</Text>
              <Text style={styles.plantSize}>📏 {plant.height} tall · {plant.width} wide</Text>
              <Text style={styles.plantDesc}>{plant.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.arButton}
              onPress={() => openAR(plant)}>
              <Text style={styles.arButtonText}>View in AR 🌿</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7f0',
    paddingTop: 60,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d6a4f',
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#52b788',
    marginBottom: 20,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  cardInfo: {
    marginBottom: 15,
  },
  plantName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b4332',
  },
  plantSize: {
    fontSize: 14,
    color: '#74c69d',
    marginTop: 4,
  },
  plantDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  arButton: {
    backgroundColor: '#2d6a4f',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  arButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});