import Header from './Header/Header';
import Main from './Main/Main';
import PersoniseMobile from './Header/PersoniseMobile';

function Wrapper() {
    return (  
        <section className="bg-color-beta w-97 h-5/6 rounded-xl flex flex-col p-4">
            <PersoniseMobile/>
            <Header/>
            <Main />
        </section>
    );
}

export default Wrapper