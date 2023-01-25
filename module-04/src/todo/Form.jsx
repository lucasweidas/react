export default function Form() {
  return (
    <form className="flex-container" onSubmit={handleSubmit}>
      <input type="text" name="input-todo" id="input-todo" />
      <button type="submit">Add Task</button>
    </form>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const { value } = event.target;
}
