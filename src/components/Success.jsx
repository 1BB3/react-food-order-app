function Success({ onOkay }) {
  return (
    <>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <p className="modal-actions">
        <button className="button" onClick={onOkay}>
          Okay
        </button>
      </p>
    </>
  );
}

export default Success;
