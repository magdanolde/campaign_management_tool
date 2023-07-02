function ButtonModal({ children, ...rest }) {
    return (
      <button
        {...rest}
        className="w-36 h-12 bg-color-omega rounded-lg col-start-3 text-color-beta justify-self-end text-lg max-md:w-26 h-10 text-base"
      >
        {children}
      </button>
    );
  }
  
  export default ButtonModal;
  