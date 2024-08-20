import React, {useState} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Gap, TextCustom} from '../../global';

const ModalAddFeedback = ({show, handleClose}) => {
  const [dataFeedback, setDataFeedback] = useState([
    {value: 'Easy', active: false},
    {value: 'Nice', active: false},
    {value: 'So Hard', active: false},
    {value: 'Difficult', active: false},
    {value: 'Recommended', active: false},
    {value: 'Programs its to hard', active: false},
  ]);

  const updateFeedback = (value, updateData) => {
    setDataFeedback(dataPrev =>
      dataPrev.map(feedback =>
        feedback.value === value ? {...feedback, ...updateData} : feedback,
      ),
    );
  };

  return (
    <Modal
      transparent={true}
      visible={show}
      onRequestClose={handleClose}
      animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextCustom style={styles.modalText} variant="large">
            Add the fieedback!
          </TextCustom>
          <View style={styles.wrap}>
            {dataFeedback.map((data, index) => (
              <TouchableOpacity
                key={index.toString()}
                style={[styles.badge, data.active ? styles.badgeActive : '']}
                onPress={() => {
                  updateFeedback(data.value, {
                    value: data.value,
                    active: !data.active,
                  });
                }}>
                <TextCustom
                  variant="small"
                  style={[
                    styles.badgetext,
                    data.active ? styles.activeText : '',
                  ]}>
                  {data.value}
                </TextCustom>
              </TouchableOpacity>
            ))}
          </View>
          <Gap height={24} />
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <TextCustom style={styles.closeButtonText}>Save</TextCustom>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderColor: '#001c3a',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    margin: 8,
  },
  badgeActive: {
    backgroundColor: '#001c3a',
  },
  badgetext: {
    color: '#001c3a',
  },
  activeText: {
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#001c3a',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  wrap: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ModalAddFeedback;
