import Post from "../Modals/postModal.js";
import Like from "../Modals/likeModal.js";

const createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { Likes: savedLike._id } },
      { new: true }
    )
      .populate("Likes")
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $pull: { Likes: deleteLike._id } },
      { new: true }
    );
    res.json({
        post: updatePost,
    })
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

export {unlikePost};
export default createLike;
