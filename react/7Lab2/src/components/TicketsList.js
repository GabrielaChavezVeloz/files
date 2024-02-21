import SupportTicket from './SupportTicket';

function TicketsList(props) {
  return (
    <ul className='tickets-list'>
      {props.tickets.map((ticket) => (
        <SupportTicket key={ticket.id} {...ticket} />
      ))}
    </ul>
  );
}

export default TicketsList;
