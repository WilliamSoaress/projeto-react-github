import { BsLink } from "react-icons/bs";
import "./Card.css";

export default function IssuesCard({ issues }) {
  const link = "https://github.com" + issues.resourcePath;
  return (
    <li className="IssueCard">
      <h3>{issues.title}</h3>
      <span className="IssueCard__headline"> {issues.body} </span>
      <div className="IssueCard__additional-info">
        <span>
          <a href={link} target="_blank" rel="noreferrer">
            {" "}
            <BsLink />
            Link
          </a>
        </span>
      </div>
    </li>
  );
}
