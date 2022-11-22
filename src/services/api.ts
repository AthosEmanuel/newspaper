import axios, * as others from "axios";

export interface PostProps {
  idUser: number;
  title: string;
  body: string;
  id: number;
}

export interface PostDetailsProps {
  body: string;
  email: string;
  id: number;
  name: string;
  postID: number;
}

const getAllPosts = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getAllComents = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllPosts, getAllComents, getAllUsers, getUser };
