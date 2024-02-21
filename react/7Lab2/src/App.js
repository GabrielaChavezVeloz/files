import { useState, useEffect } from 'react';

import TicketsFilter from './components/TicketsFilter';
import TicketsList from './components/TicketsList';
import { dummyTickets } from './data/tickets-data';

function App() {
  const [supportTickets, setSupportTickets] = useState(dummyTickets);
  const [statusFilter, setStatusFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [ticketSearchTerm, setTicketSearchTerm] = useState('');

  useEffect(
    function () {
      setSupportTickets(
        dummyTickets.filter(function (ticket) {
          const ticketHasFilteredStatus =
            statusFilter === 'all' || statusFilter === ticket.status;
          const ticketHasFilteredAssignee =
            assigneeFilter === 'all' || assigneeFilter === ticket.assignee;
          const normalizedTitle = ticket.title.toLowerCase();
          const normalizedText = ticket.text.toLowerCase();
          const normalizedSearchTerm = ticketSearchTerm.toLowerCase();
          const ticketContainsSearchTerm =
            normalizedTitle.includes(normalizedSearchTerm) ||
            normalizedText.includes(normalizedSearchTerm);

          return (
            ticketHasFilteredStatus &&
            ticketHasFilteredAssignee &&
            ticketContainsSearchTerm
          );
        })
      );
    },
    [statusFilter, assigneeFilter, ticketSearchTerm]
  );

  function findTicketsHandler(searchTerm) {
    setTicketSearchTerm(searchTerm);
  }

  function changeStatusHandler(newStatus) {
    setStatusFilter(newStatus);
  }

  function changeAssigneeHandler(newAssignee) {
    setAssigneeFilter(newAssignee);
  }

  return (
    <main>
      <TicketsList tickets={supportTickets} />
      <TicketsFilter
        onChangeStatus={changeStatusHandler}
        onChangeAssignee={changeAssigneeHandler}
        onSearch={findTicketsHandler}
      />
    </main>
  );
}

export default App;


