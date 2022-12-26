import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize'
 
function ParentHooks () {
  // These below are called: 'Variables of state'.
  // 'useState' - is a hook.
  const [originValue, setOriginValue] = useState(1);
  const windowSize = useWindowSize();
  // const [checklist, setChecklist] = useState([
  //   {
  //     title: 'Check 1',
  //     checked: false
  //   },
  //   {
  //     title: 'Check 2',
  //     checked: true
  //   }
  // ]);

  // Another hooks are 'useEffect' and 'useLayoutEffect'.
  useEffect(() => {
    console.log('componentDidMount');
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate');
  }, [originValue])

  useEffect(() => {
    console.log('componentDidMount');

    return () => {
      console.log('componentWillUnmount');
    }
  }, [])

  return (
    <div>
      <div>
        ParentHooks
      </div>
      <div>
        Value is { originValue }
      </div>
      <button onClick={ () => setOriginValue( originValue + 1 ) }>
        Increase value
      </button>

      <div>
        Window width: {windowSize[0]}
      </div>

      <div>
        Window height: {windowSize[1]}
      </div>

      {windowSize[0] > 1024 ? <p>Desktop</p> : <p>Mobile</p>}
    </div>
  )
}

export default ParentHooks;