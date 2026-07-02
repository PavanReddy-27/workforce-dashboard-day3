import { useState } from "react";
import type { Post } from "../types/Post";
import {
  usePosts,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
} from "../hooks/usePosts";

const emptyForm = { title: "", body: "" };

const Skills = () => {
  const { data: posts = [], isLoading, isError } = usePosts();

  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.body.trim()) return;

    if (editingId) {
      updatePost.mutate({ id: editingId, userId: 1, ...form });
    } else {
      createPost.mutate({ userId: 1, ...form });
    }

    setForm(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (post: Post) => {
    setEditingId(post.id);
    setForm({ title: post.title, body: post.body });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  if (isLoading) return <h2>Loading posts...</h2>;
  if (isError) return <h2>Error loading posts.</h2>;

  return (
    <div className="skills-page">
      <h1 className="page-title">Skills / Posts</h1>

      <div className="post-form">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Body"
          value={form.body}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          {editingId ? "Update Post" : "Add Post"}
        </button>
        {editingId && <button onClick={handleCancelEdit}>Cancel</button>}
      </div>

      <h2 className="section-title">Posts</h2>

      <table className="post-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button onClick={handleSubmit} disabled={createPost.isPending || updatePost.isPending}>
                 {editingId ? "Update Post" : "Add Post"}
                 </button>
                <button onClick={() => {
                if (window.confirm("Delete this post?")) deletePost.mutate(post.id);
                }}>
                 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;