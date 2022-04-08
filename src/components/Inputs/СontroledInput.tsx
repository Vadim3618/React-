import React, {ChangeEvent, useState} from 'react';


export const СontroledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
      <input value={parentValue} onChange={onChangeHandler}/>
    );
};

export const СontroledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
      <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
    );
};

export const СontroledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
      <div><select value={parentValue} onChange={onChangeHandler}>
          <option>none</option>
          <option value="1">Gomel</option>
          <option value="2">Minsk</option>
          <option value="3">Kiev</option>
      </select></div>
    )
};
