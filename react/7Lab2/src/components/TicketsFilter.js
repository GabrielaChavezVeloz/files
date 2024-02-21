import { dummyTickets } from '../data/tickets-data';

const availableStatus = [
  ...new Set(
    dummyTickets.map(function (ticket) {
      return ticket.status;
    })
  ),
];

const availableAssignees = [
  ...new Set(
    dummyTickets.map(function (ticket) {
      return ticket.assignee;
    })
  ),
];

function TicketsFilter(props) {
  function searchHandler(event) {
    props.onSearch(event.target.value);
  }

  function selectStatusHandler(event) {
    const status = event.target.value;
    props.onChangeStatus(status);
  }

  function selectAssigneeHandler(event) {
    const assignee = event.target.value;
    props.onChangeAssignee(assignee);
  }

  return (
    <aside id='tickets-filter'>
      <section id='tickets-filter__search'>
        <label htmlFor='search'>Search name & summary</label>
        <input type='search' id='search' onChange={searchHandler} />
      </section>
      <section id='tickets-filter__status'>
        <h2>Ticket Status</h2>
        <ul>
          <li>
            <input
              type='radio'
              name='status'
              id='status-all'
              value='all'
              onChange={selectStatusHandler}
              defaultChecked
            />
            <label htmlFor='status-all'>All</label>
          </li>
          {availableStatus.map(function (status) {
            return (
              <li key={status}>
                <input
                  type='radio'
                  name='status'
                  id={`status-${status}`}
                  value={status}
                  onChange={selectStatusHandler}
                />
                <label htmlFor={`status-${status}`}>{status}</label>
              </li>
            );
          })}
        </ul>
      </section>
      <section id='tickets-filter__assignee'>
        <label htmlFor='assignee'>Assignee</label>
        <select id='assignee' onChange={selectAssigneeHandler}>
          <option value='all'>All</option>
          {availableAssignees.map(function (assignee) {
            return (
              <option key={assignee} value={assignee}>
                {assignee}
              </option>
            );
          })}
        </select>
      </section>
    </aside>
  );
}

export default TicketsFilter;
