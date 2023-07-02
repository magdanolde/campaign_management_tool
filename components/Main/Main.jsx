import Board from "./Board";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";


function Main () {
    return ( 
        <section className="grid grid-cols-[1fr,10fr,2.5fr] mt-4 basis-full max-md:grid-cols-[1fr]" style={{minHeight: "1400px"}}>
            <LeftCol/>
            <Board/>
            <RightCol/>
        </section>
     );
}

export default Main ;