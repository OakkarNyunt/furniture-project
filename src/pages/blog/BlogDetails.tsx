import { useParams } from "react-router-dom";

function BlogDetails() {
  const { postId } = useParams();
  return <div>BlogDetails - {postId} </div>;
}

export default BlogDetails;
