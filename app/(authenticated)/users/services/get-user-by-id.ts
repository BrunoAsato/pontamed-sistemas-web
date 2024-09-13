type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

export async function getUserById(userId: string) {
  const response = await fetch(`http://localhost:3001/api/users/${userId}`);
  const user: User = await response.json();
  console.log(user);

  return user;
}
