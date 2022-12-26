import { useParams } from 'react-router-dom';

function BlogItem() {
  // Getting parameters from URL.
  const { id, slug } = useParams();

  return (
    <div>
      Blog item id {id} and slug: {slug}
    </div>
  );
}

export default BlogItem;
