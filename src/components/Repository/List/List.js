import SimpleBar from "simplebar-react";
import "./List.css";

export default function RepositoryList({ title, children, loading }) {
  return (
    <div className="RepositoryList">
      <h3>
        {title}
        {loading && <span>loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <ul className="RepositoryList__content">{children}</ul>
      </SimpleBar>
    </div>
  );
}
