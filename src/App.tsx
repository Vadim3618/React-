import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Reting} from "./components/Reting/Reting";

function App() {
    console.log('App rendering')
    return (
        <div>
            {/*<PageTitle title={'This is a APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Reting value={3}/>*/}
            <Accordion titleValue={'Menprops.u'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={true}/>
            {/*<Reting value={0}/>*/}
            {/*<Reting value={1}/>*/}
            {/*<Reting value={2}/>*/}
            {/*<Reting value={3}/>*/}
            {/*<Reting value={4}/>*/}
            {/*<Reting value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
