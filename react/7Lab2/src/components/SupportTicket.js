function SupportTicket(props) {
  return (
    <li className="support-ticket">
      <article>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <p className="support-ticket__details">
            <span className="support-ticket__status">{props.status}</span> | <span>{props.assignee}</span>
          </p>
        </div>
        <div className="support-ticket__actions">
          <button>More Details</button>
        </div>
      </article>
    </li>
  );
}

export default SupportTicket;
