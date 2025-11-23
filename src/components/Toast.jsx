import "./Toast.css";

function Toast({ type, message, show }) {
  return (
    <div className={`toast ${show ? "show" : ""} ${type}`}>
      {message}
    </div>
  );
}

export default Toast;
