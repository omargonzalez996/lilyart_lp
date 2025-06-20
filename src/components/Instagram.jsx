import React, { useState, useEffect } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your token
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setPosts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {posts.map((post) => (
        <div key={post.id} style={{ width: "200px" }}>
          {post.media_type === "IMAGE" ||
          post.media_type === "CAROUSEL_ALBUM" ? (
            <img
              src={post.media_url}
              alt={post.caption}
              style={{ width: "100%" }}
            />
          ) : (
            <video src={post.media_url} controls style={{ width: "100%" }} />
          )}
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
