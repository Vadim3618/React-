import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Reting/Rating";
import {UncontrolOnOff} from "./components/OnOff/UncontrolOnOff";
import {UncontrolAccordion} from './components/Accordion/UncontrolAccordion';
import {Accordion} from './components/Accordion/Accordion';
import {retingValuesType, UncontrolReting} from "./components/Reting/UncontrolReting";
import {ControlOnOff} from "./components/OnOff/ControlOnOff";
import {UncontroledInput} from "./components/Inputs/UncontroledInput";
import {СontroledCheckBox, СontroledInput, СontroledSelect} from "./components/Inputs/СontroledInput";

function App() {
    const [ratingValue, setRatingValue] = useState<retingValuesType>(0)
    const [accordCollapsed, setAccordCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    const onClickCallback = (value: any) => {
        console.log(value)
    }

    return (
      <div className={'App'}>
          <UncontroledInput/>
          <СontroledInput/>
          <СontroledSelect/>
          <СontroledCheckBox/>
          <UncontrolOnOff onChange={setOn}/>
          {on.toString()}
          <ControlOnOff on={on} setOn={setOn}/>

          <Accordion
            items={[
                {title: 'валера', value: 1},
                {title: 'паша', value: 2},
                {title: 'гоша', value: 3},
            ]}
            onClick={onClickCallback}
            titleValue={'menu'}
            collapsed={accordCollapsed}
            onChange={() => {
                setAccordCollapsed(!accordCollapsed)
            }}/>
          <UncontrolAccordion titleValue={'Users'}/>{/*неконтролируемый компонент*/}

          <Rating value={ratingValue} onClick={setRatingValue}/>{/*контролируемый*/}
          <UncontrolReting/>
      </div>
    );
}

export default App;
