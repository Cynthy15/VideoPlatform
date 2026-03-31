import { useNavigate } from "react-router-dom";

const categories = ["New", "Coding", "Music", "Gaming", "News", "Live", "Sport", "Education", "Fashion", "Science"];

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`sidebar-btn ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => {
            setSelectedCategory(cat);
            navigate("/");
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
