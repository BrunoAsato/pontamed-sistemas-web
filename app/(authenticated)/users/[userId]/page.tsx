import { getUserById } from '@auth/users/services/get-user-by-id';

async function UserDetailsPage({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const user = await getUserById(params.userId);
  return (
    <>
      <h2>
        Usuário: {user.first_name} {user.last_name}
      </h2>
      <span>{user.email}</span>
    </>
  );
}

export default UserDetailsPage;
