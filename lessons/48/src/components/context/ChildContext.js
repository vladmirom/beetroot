import { useContext } from 'react';
import { TextContext } from './GrandparentContext';

function ChildContext() {
  const context = useContext(TextContext);

  return(
    <div>
      Child text { context }.
    </div>
  )
}


export default ChildContext;