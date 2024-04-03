import { useDispatch, useSelector } from 'react-redux';
import icons from '../../../assets/icons.svg';

import {
  ButtonWraperDown,
  ImageWrapper,
  ModalBody,
  RadioField,
  RadioLabel,
  ConfirmBtn,
  YourActivityInput,
  TargetName,
  Descriptione,
  CloseBtn,
  CancelBtn,
} from './ModalStyles';
import { Formik, Form } from 'formik';
import { getCurrentUser, updateUserGoal } from '../../../redux/operations';
import { selectUserId } from '../../../redux/selectors';
import { Goal } from '../../../constants/user';

export const GoalModal = ({
  setGoalModal,
  initialValues,
  run,
  maintain,
  muscle,
  setGoalValue,
  setOverlay,
  setMenuModal,
}) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const handleSave = (values) => {
    dispatch(updateUserGoal({ userId, values }));
    setGoalValue(values.goal);
    setTimeout(() => {
      dispatch(getCurrentUser(userId));
    }, 300);

    setGoalModal(false);
    setOverlay(false);
    setMenuModal(false);
  };

  return (
    <ModalBody>
      <CloseBtn
        onClick={() => {
          setGoalModal(false);
          setOverlay(false);
          setMenuModal(false);
        }}
      >
        <use href={`${icons}#icon-close-circle`} />
      </CloseBtn>

      <h4>Target selection</h4>
      <Descriptione>
        The service will adjust your calorie intake to your goal
      </Descriptione>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSave}
      >
        {() => (
          <Form>
            <YourActivityInput>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="goal1"
                  name="goal"
                  value={Goal.LOSE_WEIGHT}
                />
                <ImageWrapper>
                  <img src={run} alt="Running" />
                </ImageWrapper>
                <TargetName>Lose fat</TargetName>
              </RadioLabel>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="goal2"
                  name="goal"
                  value={Goal.MAINTAIN}
                />
                <ImageWrapper>
                  <img src={maintain} alt="Running" />
                </ImageWrapper>
                <TargetName>Maintain</TargetName>
              </RadioLabel>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="goal3"
                  name="goal"
                  value={Goal.GAIN_MUSCLE}
                />
                <ImageWrapper>
                  <img src={muscle} alt="Running" />
                </ImageWrapper>
                <TargetName>Gain Muscle</TargetName>
              </RadioLabel>
            </YourActivityInput>
            <ButtonWraperDown>
              <ConfirmBtn type="submit">Confirm</ConfirmBtn>
              <CancelBtn
                type="button"
                onClick={() => {
                  setGoalModal(false);
                  setOverlay(false);
                  setMenuModal(false);
                }}
              >
                Cancel
              </CancelBtn>
            </ButtonWraperDown>
          </Form>
        )}
      </Formik>
    </ModalBody>
  );
};
