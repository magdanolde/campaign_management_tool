function Button ({children, ...rest}) {

    return ( 
        <button type ="button" {...rest} className="w-40 h-14 bg-color-omega rounded-full col-start-3 text-color-beta justify-self-end text-lg max-md:w-26 h-10 text-base">{children}</button>
     );
}

export default Button;
