import { createContext } from 'react';
import ParentContext from './ParentContext'

export const TextContext = createContext('without context');

function GrandparentContext() {
  return (
    <div>
      GrandparentContext

      <TextContext.Provider value="Grandparent text">
        <ParentContext/>
      </TextContext.Provider>
    </div>
  )

}

export default GrandparentContext;