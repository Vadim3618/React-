import React, {useRef, useState} from 'react';

type UncontroledInputType = {}

export const UncontroledInput = (props: UncontroledInputType) => {
    const [val, setVal] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return (
      <div>
          {/*<input id={'inputID'}/>*/}
          {/*<button onClick={() => {*/}
          {/*    let el = document.getElementById('inputID') as HTMLInputElement*/}
          {/*    //нарушение принципов реакта, лезем в дом элементы*/}
          {/*    setVal(el.value)*/}
          {/*}}>save*/}
          {/*</button>*/}
          {/*actual value - {val}*/}
          <input ref={inputRef}/>
          <button onClick={()=>{
              const el = inputRef.current as HTMLInputElement
              setVal(el.value)
          }}>save</button> actual value - {val}

      </div>
    );
};
