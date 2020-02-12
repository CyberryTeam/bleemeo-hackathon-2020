import React from 'react';
import Form from './form';
import Header from './header';
import ResultPage from './result_page';

const Home = () => {
    const [send, setSend] = React.useState([]);

    return (
        <>
            <Header />
            {
                send.length ?
                <ResultPage values={send} onReturn={() => setSend([])} />
                :
                <Form values={send} onSend={(values) => setSend(values)}/>
            }
        </>
    );
};

export default Home;