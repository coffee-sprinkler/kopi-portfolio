const ScrollToTopButton = ({ show, onClick }) => {
  return (
    show && (
      <button className="scroll-to-top" onClick={onClick}>
        <i className="bi bi-arrow-up-circle"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
