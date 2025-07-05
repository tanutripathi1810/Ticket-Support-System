import { useSelector } from 'react-redux'

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="note-item glass interactive-hover fade-in">
      <div className="note-header">
        <div className="note-info">
          <strong>
            {note.isStaff ? '👨‍💼 Staff' : '👤 Customer'} - {note.user}
          </strong>
          <div className="note-date">
            📅 {new Date(note.createdAt).toLocaleString('en-US')}
          </div>
        </div>
        {note.isStaff && (
          <div className="staff-badge">
            <span className="status" style={{ background: '#8b5cf6' }}>
              Staff Response
            </span>
          </div>
        )}
      </div>
      <div className="note-text">
        {note.text}
      </div>
    </div>
  )
}

export default NoteItem