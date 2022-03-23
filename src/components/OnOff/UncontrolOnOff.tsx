import React, {useState} from 'react';

type UncontrolOnOffType = {
    onChange: (on: boolean) => void
}

export const UncontrolOnOff = (props: UncontrolOnOffType) => {

    let [onc, setOnc] = useState(false)

    const onStyle = {
        display: 'inline-block',
        border: '1px solid black',
        height: '20px',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: onc ? 'green' : 'white'

    }
    const offStyle = {
        display: 'inline-block',
        border: '1px solid black',
        height: '20px',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: onc ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: onc ? 'green' : 'red'
    }

    const onClicked=() => {
        setOnc(true)
        props.onChange(true)
    }
    const offClicked=() => {
        setOnc(false)
        props.onChange(false)
    }

    return (
      <div>
          <div style={onStyle} onClick={onClicked}>On</div>
          <div style={offStyle} onClick={offClicked}>Off</div>
          <div style={indicatorStyle}/>
      </div>
    );
};

