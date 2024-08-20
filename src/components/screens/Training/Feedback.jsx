import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextCustom} from '../../global';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import ModalAddFeedback from './ModalAddFeedback';

const Feedback = () => {
  const [mdoalShow, setMdoalShow] = useState(false);
  const choosenDay = useSelector(state => state.training.choosenDay);
  const feedbackDayOne = useSelector(state => state.training.feedbackDayOne);
  const feedbackDayTwo = useSelector(state => state.training.feedbackDayTwo);
  const feedbackDayThree = useSelector(
    state => state.training.feedbackDayThree,
  );

  console.log('feedbackDayOne', feedbackDayOne);

  const dispatch = useDispatch();

  const feedbackHandler = () => {
    if (choosenDay === 0) {
      if (feedbackDayOne !== '') {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Failed',
          textBody: 'Feedback day One already filled',
        });
        return;
      }
      dispatch({type: 'SET_FEEDBACK_DAY1', data: 'Feedback'});
      setMdoalShow(true);
    }
    if (choosenDay === 1) {
      if (feedbackDayTwo !== '') {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Failed',
          textBody: 'Feedback day Two already filled',
        });
        return;
      }
      dispatch({type: 'SET_FEEDBACK_DAY2', data: 'Feedback'});
      setMdoalShow(true);
    }
    if (choosenDay === 2) {
      if (feedbackDayThree !== '') {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Failed',
          textBody: 'Feedback day Three already filled',
        });
        return;
      }
      dispatch({type: 'SET_FEEDBACK_DAY3', data: 'Feedback'});
      setMdoalShow(true);
    }
  };

  const submitFeedback = () => {
    setMdoalShow(false);
  };

  return (
    <>
      <ModalAddFeedback show={mdoalShow} handleClose={submitFeedback} />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.feedbackBtn}
        onPress={() => feedbackHandler()}>
        <TextCustom>
          <Icon name="add" size={32} style={{color: 'white'}} />
        </TextCustom>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  feedbackBtn: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    borderRadius: 60,
    padding: 12,
    backgroundColor: '#001c3a',
  },
});

export default Feedback;
