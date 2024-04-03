import {
  Container,
  Heading,
  FullFrame,
  Cont,
  StyledName,
  StyledValue,
} from './DailyGoal.styled';
import icons from '../../../assets/icons.svg';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/selectors';

export default function DailyGoal() {
  const userData = useSelector(selectUserData);

  return (
    <Container>
      <Heading>Daily Goal</Heading>
      <FullFrame>
        <Cont>
          <svg style={{ stroke: 'var(--colories-graf-color)' }}>
            <use href={`${icons}#icon-bubble`} />
          </svg>
          <div>
            <StyledName>Calories</StyledName>
            <StyledValue>{userData.info?.dailyCalories}</StyledValue>
          </div>
        </Cont>
        <Cont>
          <svg style={{ stroke: 'var(--water-color)' }}>
            <use href={`${icons}#icon-milk`} />
          </svg>
          <div>
            <StyledName>Water</StyledName>
            <StyledValue>
              {userData.info?.dailyWater} <span>ml</span>
            </StyledValue>
          </div>
        </Cont>
      </FullFrame>
    </Container>
  );
}
