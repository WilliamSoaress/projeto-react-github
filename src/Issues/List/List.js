import SimpleBar from "simplebar-react";
import "./List.css";

export default function IssuesList({ title, children, loading }) {
  return (
    <div className="IssueList">
      <h3>
        {title}
        {loading && <span>loading...</span>}
      </h3>

      <SimpleBar style={{ maxHeight: 650 }}>
        <ul className="IssueList__content">{children}</ul>
      </SimpleBar>
    </div>
  );
}
