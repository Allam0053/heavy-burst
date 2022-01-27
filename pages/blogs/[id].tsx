import { User, UserResponse } from '../../type/User'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((user: User) => {
    return {
      params: { id: user?.id?.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context: { params: { id: any; }; }) {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { user: data }
  };
}

const Details = ({ user }: UserResponse) => {
  return (
    <div>
      <h1>{ user?.name }</h1>
      <p>{ user?.email }</p>
      <p>{ user?.website }</p>
      <p>{ user?.address?.city }</p>
    </div>
  );
}



export default Details;