const Select = ({ children, ...rest }) => {
    return (
      <select
        className="p-8 bg-color-gamma rounded-xl border-none bg-no-repeat w-40 mr-10 max-md:p-4"
        style={{
          background: "url(https://cdn-icons-png.flaticon.com/512/9068/9068059.png) 1px center / 16px no-repeat #F2F2F6",
        }} {...rest}
      >
        {" "}
        {children}
      </select>
    );
  };
  
  export default Select;