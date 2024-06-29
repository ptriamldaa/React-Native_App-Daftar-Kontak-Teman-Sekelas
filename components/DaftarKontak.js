import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Kontak from './Kontak';

const kontakList = [
  { id: 1, gambar: require('../assets/1.jpeg'), judul: 'Ages Gelar Pangestu', telpon: '0857-1234-8765', email: 'agesgelarp@ummi.ac.id' },
  { id: 2, gambar: require('../assets/2.jpeg'), judul: 'Gibran Genta Rabbani', telpon: '0857-5678-8709', email: 'ggrabbani@ummi.ac.id' },
  { id: 3, gambar: require('../assets/3.jpeg'), judul: 'Fauzia Nurafni', telpon: '0818-5228-9999', email: 'fauzia@ummi.ac.id' },
  { id: 4, gambar: require('../assets/4.jpeg'), judul: 'Nadia Putri Rahmawati', telpon: '0812-1314-1516', email: 'nadiapr@ummi.ac.id' },
  { id: 5, gambar: require('../assets/5.jpeg'), judul: 'Silvy Denia Putri', telpon: '0811-7654-9090', email: 'silvydeniaa@ummi.ac.id' },
  { id: 6, gambar: require('../assets/6.jpeg'), judul: 'Putri Aulia Maulida', telpon: '0852-0987-6543', email: 'putriaul@ummi.ac.id' },
  { id: 7, gambar: require('../assets/7.jpeg'), judul: 'Fajar Budiman', telpon: '0858-1029-9876', email: 'farel@ummi.ac.id' },
  { id: 8, gambar: require('../assets/8.jpeg'), judul: 'M Farel Abdillah', telpon: '0812-8888-9999', email: 'fajarbudi@ummi.ac.id' },
  { id: 9, gambar: require('../assets/9.jpeg'), judul: 'Utama Luhur Budhy', telpon: '0857-1010-1190', email: 'utamabudhy@ummi.ac.id' },
  { id: 10, gambar: require('../assets/10.jpeg'), judul: 'Feri Irawan', telpon: '0812-8786-9897', email: 'feriirawan@ummi.ac.id' },
  { id: 11, gambar: require('../assets/11.jpeg'), judul: 'Alma Shakiragama Khairunnisa', telpon: '0857-2030-4050', email: 'almashak@ummi.ac.id' },
  { id: 12, gambar: require('../assets/12.jpeg'), judul: 'Reiza Maulidia Senjaya', telpon: '0852-5252-1111', email: 'reizamau@ummi.ac.id' },
  { id: 13, gambar: require('../assets/13.jpeg'), judul: 'Fino Falentino', telpon: '0812-2222-2222', email: 'finofalen@ummi.ac.id' },
  { id: 14, gambar: require('../assets/14.jpeg'), judul: 'M George Elmar', telpon: '0811-1111-1111', email: 'georgeelmar@ummi.ac.id' },
  { id: 15, gambar: require('../assets/15.jpeg'), judul: 'Asri Nur Kholidah', telpon: '0813-1313-1313', email: 'asrink@ummi.ac.id' },
  { id: 16, gambar: require('../assets/16.jpeg'), judul: 'Syalwa Fida Wifa', telpon: '0857-9012-1210', email: 'syalwafw@ummi.ac.id' },
  { id: 17, gambar: require('../assets/1.jpeg'), judul: 'Moh Abdi Hafidz', telpon: '0811-1212-7070', email: 'abdihafidzp@ummi.ac.id' },
  { id: 18, gambar: require('../assets/2.jpeg'), judul: 'Rizky Maulana Yusuf', telpon: '0855-5555-5555', email: 'rmyusuf@ummi.ac.id' },
  { id: 19, gambar: require('../assets/7.jpeg'), judul: 'Eri Zulfan Diwani', telpon: '0857-0000-0000', email: 'zulfan@ummi.ac.id' },
  { id: 20, gambar: require('../assets/8.jpeg'), judul: 'Raka Wahyu Sagara', telpon: '0812-3456-7890', email: 'rwsagara@ummi.ac.id' },
  { id: 21, gambar: require('../assets/9.jpeg'), judul: 'Nur Insan Subekti', telpon: '0857-9000-8000', email: 'insans@ummi.ac.id' },
  { id: 22, gambar: require('../assets/10.jpeg'), judul: 'Hanif Imam Muntazhar', telpon: '0813-7688-9099', email: 'hanif@ummi.ac.id' },
  { id: 23, gambar: require('../assets/13.jpeg'), judul: 'Restu Gede Purnama', telpon: '0822-2222-2222', email: 'restuu@ummi.ac.id' },
  { id: 24, gambar: require('../assets/14.jpeg'), judul: 'Maulana Ifnu Syafi', telpon: '0833-3333-3333', email: 'ifnoe@ummi.ac.id' },
  { id: 25, gambar: require('../assets/1.jpeg'), judul: 'Rafdy Fauzan Ilham', telpon: '0877-9890-7777', email: 'rafdyfauzan@ummi.ac.id' },
  { id: 26, gambar: require('../assets/2.jpeg'), judul: 'Muhammad Fadlan Syuhada', telpon: '0844-4444-4444', email: 'fadlan@ummi.ac.id' },
  { id: 27, gambar: require('../assets/7.jpeg'), judul: 'Arip', telpon: '0855-5555-5555', email: 'arip@ummi.ac.id' },
  { id: 28, gambar: require('../assets/8.jpeg'), judul: 'Arya Pangestu', telpon: '0866-6666-6666', email: 'apangestu@ummi.ac.id' },
  { id: 29, gambar: require('../assets/9.jpeg'), judul: 'Mohammad Samani Kamil', telpon: '0877-7777-7777', email: 'samanikamil@ummi.ac.id' },
  { id: 30, gambar: require('../assets/9.jpeg'), judul: 'Luthfi Fauzan Achmad', telpon: '0888-8888-8888', email: 'luthfi@ummi.ac.id' },
  { id: 31, gambar: require('../assets/13.jpeg'), judul: 'M Arizky', telpon: '0899-9999-9999', email: 'arizky@ummi.ac.id' },
  { id: 32, gambar: require('../assets/14.jpeg'), judul: 'M Rizki Maulana', telpon: '0890-9090-9090', email: 'rizkimaul@ummi.ac.id' },
  { id: 33, gambar: require('../assets/1.jpeg'), judul: 'Ferri Ekalaya', telpon: '0858-5858-5858', email: 'ekalaya@ummi.ac.id' },
  { id: 34, gambar: require('../assets/2.jpeg'), judul: 'Carol Dwi Putra', telpon: '0857-1122-3344', email: 'caroldwi@ummi.ac.id' },
  { id: 35, gambar: require('../assets/7.jpeg'), judul: 'M Fakhri Kairil', telpon: '0857-5566-7788', email: 'fakhri@ummi.ac.id' },
  { id: 36, gambar: require('../assets/8.jpeg'), judul: 'Nazmi Maulana Fauzan', telpon: '0857-9988-7766', email: 'nazmi@ummi.ac.id' },
  { id: 37, gambar: require('../assets/9.jpeg'), judul: 'M Sachran Almiqdad', telpon: '0857-5544-3322', email: 'sachran@ummi.ac.id' },
  { id: 38, gambar: require('../assets/10.jpeg'), judul: 'Dhiya Jauhar Akmal', telpon: '0812-0192-8374', email: 'djakmal@ummi.ac.id' },
  { id: 39, gambar: require('../assets/1.jpeg'), judul: 'Muhammad Faisal Rafli', telpon: '0852-6121-3141', email: 'faisalr@ummi.ac.id' },
];

export default function DaftarKontak({ navigation }) {
  const scrollViewRef = React.useRef(null);

  const kontakDikelompokkan = kontakList.reduce((acc, kontak) => {
    const hurufPertama = kontak.judul.charAt(0).toUpperCase();
    if (!acc[hurufPertama]) {
      acc[hurufPertama] = [];
    }
    acc[hurufPertama].push(kontak);
    return acc;
  }, {});

  const hurufUrut = Object.keys(kontakDikelompokkan).sort();
  const semuaHuruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const scrollToLetter = (letter) => {
    const index = hurufUrut.indexOf(letter);
    if (scrollViewRef.current && index !== -1) {
      const yPos = index * 210; // Sesuaikan dengan tinggi item kontak Anda
      scrollViewRef.current.scrollTo({ y: yPos, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} ref={scrollViewRef}>
        {hurufUrut.map((huruf) => (
          <View key={huruf}>
            <Text style={styles.headerHuruf}>{huruf}</Text>
            {kontakDikelompokkan[huruf].map((kontak) => (
              <Kontak
                key={kontak.id}
                gambar={kontak.gambar}
                judul={kontak.judul}
                telpon={kontak.telpon}
                onPress={() => navigation.navigate('DetailKontak', { contact: kontak })}
              />
            ))}
          </View>
        ))}
      </ScrollView>
      <View style={styles.letterContainer}>
        {semuaHuruf.map((huruf) => (
          <TouchableOpacity key={huruf} onPress={() => scrollToLetter(huruf)}>
            <Text style={styles.letter}>{huruf}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5'
  },
  scrollView: {
    flex: 1,
  },
  headerHuruf: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: '#000',
    backgroundColor: '#f0f0f0'
  },
  letterContainer: {
    position: 'absolute',
    right: 10,
    top: '10%',
    bottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dfdfdf',
    borderRadius: 10,
    paddingVertical: 10,
  },
  letter: {
    fontSize: 13,
    color: '#000',
    padding: 4,
  },
});
