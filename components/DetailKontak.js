import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class DetailKontak extends React.Component {
  constructor(props) {
    super(props);
    this.modalTampil = false;
    this.setModalTampil = this.setModalTampil.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  setModalTampil(tampil) {
    this.modalTampil = tampil;
    this.forceUpdate();
  }

  render() {
    const { route, navigation } = this.props;
    const { contact } = route.params;

    let namaDepan = '';
    let namaBelakang = '';
    const namaSplit = contact.judul.split(' ');
    if (namaSplit.length > 2) {
      namaDepan = namaSplit.slice(0, 2).join(' ');
      namaBelakang = namaSplit.slice(2).join(' ');
    } else if (namaSplit.length === 2) {
      namaDepan = namaSplit[0];
      namaBelakang = namaSplit[1];
    } else {
      namaDepan = contact.judul;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.setModalTampil(true)}>
          <Image source={contact.gambar} style={styles.img} />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.modalTampil}
          onRequestClose={() => {
            this.setModalTampil(false);
          }}
        >
          <View style={styles.modalContainer}>
            <Image source={contact.gambar} style={styles.modalImg} resizeMode="contain" />
            <TouchableOpacity style={styles.closeButton} onPress={() => this.setModalTampil(false)}>
              <Icon name="close" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </Modal>

        <Text style={styles.fullname}>{contact.judul}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="call" size={30} color="#070707" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="videocam" size={30} color="#070707" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="chatbubbles" size={30} color="#070707" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Nama Depan:</Text>
        <Text style={styles.value}>{namaDepan}</Text>

        {namaBelakang ? (
          <>
            <Text style={styles.label}>Nama Belakang:</Text>
            <Text style={styles.value}>{namaBelakang}</Text>
          </>
        ) : null}

        <Text style={styles.label}>Telepon:</Text>
        <Text style={styles.value}>{contact.telpon}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{contact.email}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  modalImg: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fullname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
    width: '100%',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  button: {
    backgroundColor: '#070707',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailKontak;