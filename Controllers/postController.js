import Post from "../Modals/postModal.js";

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while creating post",
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("Likes")
      .populate("Comments")
    //   .exec();
    res.json({
      post: posts,
    });
  } catch (error) {
    res.json({
      error: error,
      message: "Error",
    });
  }
};

export { getAllPosts };
export default createPost;
