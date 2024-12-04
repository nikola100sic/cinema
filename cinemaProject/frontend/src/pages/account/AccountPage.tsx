import { useParams } from 'react-router-dom';

const AccountPage = () => {
  const { username } = useParams();

  return (
    <div>
      <h4>Welcome to the account page, {username}!</h4>
    </div>
  );
};

export default AccountPage;
