import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolAccordion(props: AccordionPropsType) {

    let [collapsed,setCollapsed] = useState(false)

    const onClickHandler = () => {
      setCollapsed(!collapsed)
    }

    return (
      <div>
          <AccordionTitle title={props.titleValue} collBack={onClickHandler}/>
          {!collapsed && <AccordionBody/>}
      </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    collBack:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const h3Style = {
        border:'1px solid black',
        display: 'inline-block'
    }

    return (
      <h3 style={h3Style} onClick={props.collBack}>{props.title}</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

