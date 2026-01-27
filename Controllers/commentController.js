import Post from "../Modals/postModal.js";
import Comment from "../Modals/commentModal.js";

const createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = new Comment({ post, user, body });
    const savedComment = await comment.save();
    const updatePost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { Comments: savedComment._id },
      },
      { new: true }
    )
      .populate("Comments")
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while Creating comment",
      message: error,
    });
  }
};

export default createComment;
