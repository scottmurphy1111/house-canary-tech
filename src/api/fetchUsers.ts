export const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=30')
  const data = await response.json();
  return data
}