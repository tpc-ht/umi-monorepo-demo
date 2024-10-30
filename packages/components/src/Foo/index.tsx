import React, {type FC, useRef, useState} from 'react';
import {useSize} from "ahooks";


const Foo: FC<{ title: string }> = (props) => {
  const [a] = useState(500)
  const ref = useRef<any>(null)
  const state = useSize(ref);
  // useEffect(() => {
  // console.log("state", state)
  // }, [state])
  return <div ref={ref}>
    <h4>{props.title}{a}</h4>
  </div>
};

export default Foo;

