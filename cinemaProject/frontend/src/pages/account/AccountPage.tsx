import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types/User';
import userServiceAxios from '../../components/api/user.service.axios';
import { FaUserAlt } from 'react-icons/fa';
import {
  ImageStyle,
  StyledCard,
  UserContainer,
  UserInformation,
} from './AccountPage.styled';
import { LeftSide, RightSide } from '../reservation/Reservation.styled';

const AccountPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User>();

  const getUser = async () => {
    try {
      const res = await userServiceAxios.getUser(String(username));
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h4>
        <UserContainer>
          <LeftSide>
            <ImageStyle>
              <FaUserAlt style={{ height: 200, width: 180 }} />
            </ImageStyle>
            <UserInformation>
              <p>Name: {user?.name}</p>
              <p>Surname: {user?.surname}</p>
              <p>Username: {user?.username}</p>
              <p>eMail: {user?.email}</p>
            </UserInformation>
          </LeftSide>
          <RightSide>
            <StyledCard to="/my-reservations" image="/reservation.jpg" />
            <StyledCard to="/my-favourites" image="/favourite.jpg" />
          </RightSide>
        </UserContainer>
      </h4>
    </div>
  );
};

export default AccountPage;
