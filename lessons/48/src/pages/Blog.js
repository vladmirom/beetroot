import { Link } from 'react-router-dom';

function Blog() {
const posts = [
  {
    id: 1,
    slug: 'first',
    title: 'Post 1',
    description: 'First post desc'
  },
  {
    id: 2,
    slug: 'second',
    title: 'Post 3',
    description: 'Second post desc'
  },
  {
    id: 3,
    slug: 'third',
    title: 'Post 3',
    description: 'Third post desc'
  },
]

  return (
    <section>
      <h2>Blog</h2>
      <div>
      {posts.map( post => <article key={post.id}>
          <h3>
            {post.title}
          </h3>
          <p>
            {post.description}
          </p>
          <Link to={`/blog/${post.id}/${post.slug}`}>
            More
          </Link>
        </article>)}
      </div>
    </section>
  )
}

export default Blog;
