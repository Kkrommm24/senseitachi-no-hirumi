import { useState, useEffect } from "react";
import "./TagPage.css";
import Tag from "api/tag";

const TagPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const getFavouriteTags = async () => {
    try {
      const response = await Tag.getFavouriteTags()
      setSelectedTags(response.data.data.map(tag => tag.id));
    } catch (err) {
      console.error(err);
    }
  };

  const getAllTags = async () => {
    try {
      const response = await Tag.getAllTags();
      setAllTags(response.data);
    } catch (err) {
      // setError(err);
      console.error(err);
    }
    // setLoading(false);
  };

  useEffect(() => {
    getAllTags();
    getFavouriteTags();
  }, []);

  const handleTagChange = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleSaveFavouriteTags = async () => {
    try {
      await Tag.saveFavouriteTags(selectedTags);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container w-3/4 min-w-[700px] max-w-[1200px]">
      <h1 className="title">すべてのタグ</h1>

      <div className="tag-selection">
        <h2 className="tag-selection-title">タグを選択:</h2>
        <div className="tags">
          {allTags.map((tag) => (
            <label
              key={tag.id}
              className={`tag ${
                selectedTags.includes(tag.id) ? "selected" : ""
              }`}
            >
              <input
                type="checkbox"
                className="checkbox"
                checked={selectedTags.includes(tag.id)}
                onChange={() => handleTagChange(tag.id)}
              />
              <span>{tag.name}</span>
            </label>
          ))}
        </div>
      </div>
      <button className="link-button" onClick={() => handleSaveFavouriteTags()}>
        タグを保存する
      </button>
    </div>
  );
};

export default TagPage;
