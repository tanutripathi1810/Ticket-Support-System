import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import { AiFillPlusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { getTicket, closeTicket } from '../features/tickets/ticketSlice'
import {
  getNotes,
  createNote,
  reset as notesReset,
} from '../features/notes/noteSlice'
import { BackButton } from '../components/BackButton'
import Spinner from '../components/Spinner'
import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'
import '../styles/Tickets.css' // Adjust the path as needed

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

function Ticket() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')

  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  )

  const {
    notes,
    isLoading: notesIsLoading,
    isSuccess: notesIsSuccess,
    isError: notesIsError,
    message: notesMessage,
  } = useSelector((state) => state.notes)

  const params = useParams()
  const { ticketId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getTicket(ticketId))
    dispatch(getNotes(ticketId))
  }, [isError, message, ticketId, dispatch])

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
    toast.success('Ticket closed successfully!')
    navigate('/tickets')
  }

  const onNoteSubmit = (e) => {
    e.preventDefault()
    if (!noteText.trim()) {
      toast.error('Please enter a note')
      return
    }
    dispatch(createNote({ noteText, ticketId }))
    setNoteText('')
    closeModal()
    toast.success('Note added successfully!')
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setNoteText('')
  }

  if (isLoading || notesIsLoading) {
    return (
      <div className="container">
        <div className="spinner">
          <div className="spinner-border"></div>
        </div>
      </div>
    )
  }

  if (isError || notesIsError) {
    return (
      <div className="container">
        <div className="tickets-page glass">
          <div className="page-header">
            <BackButton url='/tickets' />
          </div>
          <div className="text-center p-3">
            <h3 style={{ color: '#ef4444' }}>Something went wrong</h3>
            <p style={{ opacity: 0.7 }}>Please try again later</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="ticket-page glass fade-in">
        <div className="page-header">
          <BackButton url='/tickets' />
        </div>

        <div className="ticket-header">
          <h2>
            Ticket ID: {ticket._id}
            <span className={`status status-${ticket.status}`}>
              {ticket.status}
            </span>
          </h2>
          <h3>
            📅 Date submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
          </h3>
          <h3>
            📦 Product: {ticket.product}
          </h3>
        </div>

        <div style={{marginBottom:'2rem'}}className="ticket-desc glass">
          <h3 style={{}}>📝 Description of issue</h3>
          <p>{ticket.description}</p>
        </div>

        <div className="d-flex align-center justify-space-between mb-3">
          <h2 style={{marginTop:'-1rem', marginRight:'4rem'}}>💬 Notes</h2>
          {ticket.status !== 'closed' && (
            <button className="btn interactive-hover" onClick={openModal}>
              <AiFillPlusCircle />
              Add Note
            </button>
          )}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Add Note'
          className="ReactModal__Content"
          overlayClassName="ReactModal__Overlay">
          <h2 className="mb-3"> Add Note</h2>
          <button className="btn-close" onClick={closeModal}>
            <AiFillCloseCircle />
          </button>
          <form onSubmit={onNoteSubmit}>
            <div className="form-group">
              <textarea
                name="noteText"
                id="noteText"
                className="form-control"
                placeholder="Enter your note here..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button className="btn interactive-hover" type="submit">
                💾 Submit Note
              </button>
            </div>
          </form>
        </Modal>

        <div className="notes-container">
          {notes.length === 0 ? (
            <div className="glass p-3 text-center">
              <p style={{ opacity: 0.7 }}>No notes yet. Add a note to get started!</p>
            </div>
          ) : (
            notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))
          )}
        </div>

        {ticket.status !== 'closed' && (
          <button 
            className="btn btn-block btn-danger interactive-hover mt-3" 
            onClick={onTicketClose}
          >
            🔒 Close Ticket
          </button>
        )}
      </div>
    </div>
  )
}

export default Ticket