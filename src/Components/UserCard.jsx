
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from './queries';

const UserCard = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  console.log(error , data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {data.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;
