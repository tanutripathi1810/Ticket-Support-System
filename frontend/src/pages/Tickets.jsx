import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import { BackButton } from '../components/BackButton'
import TicketItem from '../components/TicketItem'
import '../styles/Tickets.css' // Adjust the path as needed
function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  )
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="container">
        <div className="spinner">
          <div className="spinner-border"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="tickets-page glass fade-in">
        <div className="page-header">
          <BackButton url='/' />
          <h1 className="page-title">My Tickets</h1>
        </div>
        
        <div className="tickets-container">
          <div className="ticket-headings">
            <div>Date</div>
            <div>Product</div>
            <div>Status</div>
            <div>Action</div>
          </div>
          
          {tickets.length === 0 ? (
            <div className="text-center p-3">
              <p style={{ opacity: 0.7 }}>No tickets found. Create your first ticket to get started!</p>
            </div>
          ) : (
            tickets.map((ticket) => (
              <TicketItem key={ticket._id} ticket={ticket} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Tickets