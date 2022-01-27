import { InferGetStaticPropsType } from 'next';
import Link from 'next/link'
import Blog from '../../type/Blog';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {props: {blogs: data} };
}

function Blogs( { blogs } :  InferGetStaticPropsType<typeof getStaticProps> ) {
  // console.log(ninjas)
  return (
    <div>
      <h1>All Blogs</h1>
      {blogs && (
        blogs.map((blog: Blog) => (
          <Link href={'/blogs/' + blog.id} key={blog.id}>
            <a>
              <h3>{blog.name}</h3>
            </a>
          </Link>
        ))
      )}
    </div>
  );
}

export default Blogs;

/*
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
},
*/