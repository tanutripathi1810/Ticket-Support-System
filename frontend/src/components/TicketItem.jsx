import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

function TicketItem({ ticket }) {
  return (
    <Link to={`/ticket/${ticket._id}`} className="ticket-item interactive-hover">
      <div>
        <span className="ticket-label">Date:</span>
        {new Date(ticket.createdAt).toLocaleDateString('en-US')}
      </div>
      <div>
        <span className="ticket-label">Product:</span>
        {ticket.product}
      </div>
      <div>
        <span className={`status status-${ticket.status}`}>
          {ticket.status}
        </span>
      </div>
      <div className="ticket-actions">
        <button className="btn">
          View
          
        </button>
      </div>
    </Link>
  )
}

export default TicketItem