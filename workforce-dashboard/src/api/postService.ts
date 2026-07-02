import api from "./api";
import type { Post } from "../types/Post";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts");
  return response.data;
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const response = await api.post<Post>("/posts", post);
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await api.put<Post>(`/posts/${post.id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await api.delete(`/posts/${id}`);
};