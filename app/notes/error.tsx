// app/notes/error.tsx

"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const NotesError = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Помилка при завантаженні</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Спробувати знову</button>
    </div>
  );
};

export default NotesError;
