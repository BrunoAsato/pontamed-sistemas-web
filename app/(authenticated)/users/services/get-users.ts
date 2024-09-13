export async function getUsers() {
  console.log('Getting users...');
  const response = await fetch(`http://localhost:3001/api/users`);
  const users = await response.json();

  return users || [];
}
