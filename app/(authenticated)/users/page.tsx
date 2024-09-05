import Link from 'next/link';
import { getUsers } from './services/get-users';

const UsersPage: React.FC = () => {
  const users = await getUsers();
  return (
    <>
      <div>
        <h1>Users Page</h1>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {' '}
              {user.first_name} {user.last_name} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
