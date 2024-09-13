import Link from 'next/link';
import { getUsers } from './services/get-users';

const UsersPage: React.FC = async () => {
  const users = await getUsers();

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Users Page</h1>
      </div>
      <ul>
        {users.length === 0 && <div>No users found.</div>}
        {users.length > 0 && <h2>Users:</h2>}
        {users.length > 0 && (
          <Link href={`/users/create`}>Create a new user</Link>
        )}
        {users.map((user, index) => (
          <li key={index}>
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
