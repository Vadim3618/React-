import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Reting/Rating";
import {UncontrolOnOff} from "./components/OnOff/UncontrolOnOff";
import {UncontrolAccordion} from './components/Accordion/UncontrolAccordion';
import {Accordion} from './components/Accordion/Accordion';
import {retingValuesType, UncontrolReting} from "./components/Reting/UncontrolReting";
import {ControlOnOff} from "./components/OnOff/ControlOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<retingValuesType>(0)
    let [accordCollapsed, setAccordCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    return (
      <div className={'App'}>
          <UncontrolOnOff onChange={setOn}/>
          {on.toString()}
          <ControlOnOff on={on} setOn={setOn}/>

          <Accordion titleValue={'menu'} /*контролируемый*/
                     collapsed={accordCollapsed}
                     onChange={()=>{setAccordCollapsed(!accordCollapsed)}}/>
          <UncontrolAccordion titleValue={'Users'}/>{/*неконтролируемый компонент*/}

          <Rating value={ratingValue} onClick={setRatingValue}/>{/*контролируемый*/}
          <UncontrolReting/>
      </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h3>{props.title}</h3>
}

export default App;
