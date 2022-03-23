import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    if (!props.collapsed) {
        return (<div>
              <AccordionTitle title={props.titleValue}
                              onChange={props.onChange}
                              collapsed={props.collapsed}/>
              <AccordionBody/></div>
        )
    } else {
        return <AccordionTitle title={props.titleValue}
                               onChange={props.onChange}
                               collapsed={props.collapsed}/>
    }
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const h3Style = {
        border: '1px solid black',
        display: 'inline-block'
    }
    const onClickHandler = () => {
        props.onChange()
    }
    return (
      <h3 style={h3Style}
          onClick={onClickHandler}>
          {props.title}
      </h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


