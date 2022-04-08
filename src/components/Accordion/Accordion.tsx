import React from "react";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any)=>void
}

export function Accordion(props: AccordionPropsType) {
    if (!props.collapsed) {
        return (<div>
              <AccordionTitle title={props.titleValue}
                              onChange={props.onChange}
                              collapsed={props.collapsed}/>
              <AccordionBody items={props.items}
                             onClick={props.onClick}/></div>
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

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value:any)=>void
}

function AccordionBody(props: AccordionBodyType) {
    return <ul>
        {props.items.map((i, index) =>
          <li onClick={() => props.onClick(i.value)}
              key={index}>{i.title}
          </li>
        )}
    </ul>
}


