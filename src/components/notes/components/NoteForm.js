const NoteForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input name="title" placeholder="Enter title" />
    <textarea name="description" placeholder="Enter description" />
    <button data-status="close">Add post</button>
  </form>
);

export default NoteForm;
