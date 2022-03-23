import React from 'react';

type ControlOnOffType = {
    on:boolean
    setOn:(on:boolean)=>void
}

export const ControlOnOff = (props: ControlOnOffType) => {

    const onStyle = {
        display: 'inline-block',
        border: '1px solid black',
        height: '20px',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'green':'white'

    }
    const offStyle = {
        display: 'inline-block',
        border: '1px solid black',
        height: '20px',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white':'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green':'red'

    }

    return (
      <div>
          <div style={onStyle} onClick={()=>props.setOn(true)}>On</div>
          <div style={offStyle} onClick={()=>props.setOn(false)}>Off</div>
          <div style={indicatorStyle}/>
      </div>
    );
};

