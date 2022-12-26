import { useMemo } from 'react';

// Older and longer way of using props.
// function Square(props) {
//   const sqrt = useMemo( () => props.a * props.a, [props.a] );

//   return (
//     <div>
//       <h3>
//         {props.title}
//       </h3>
//       <div>
//        Side: {props.a}
//       </div>
//       <div>
//         Area: {sqrt}
//       </div>
//     </div>
//   )
// } 

// We can use props differently. Way easier.
function Square({a, title}) {
  // Hook 'useMemo' accepts callback function and array of dependencies. 
  // It will remember the formula and listen to the change of the props.
  
  // In practice here, we don't want to re-calculate the formula if the props.title changes.
  const sqrt = useMemo( () => a * a, [a] );
  
    return (
      <div>
        <h3>
          {title}
        </h3>
        <div>
         Side: {a}
        </div>
        <div>
          Area: {sqrt}
        </div>
      </div>
    )
  } 

export default Square;