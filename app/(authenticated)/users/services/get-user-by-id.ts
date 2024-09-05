export async function getUserById(userId: string) {
  const response = await fetch(`http://localhost/api/users/${userId}`);
  const user = await response.json();

  return user?.data || [];
}
