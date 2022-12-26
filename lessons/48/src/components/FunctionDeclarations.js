// Method 1:
// function FunctionDeclarations () {
//   return <div>Function Declarations</div>
// }

// export default FunctionDeclarations;

// Method 2: Not preferrable, difficult for debugging
// export default () => {
//   return <div>Function Declarations</div> 
// }


// Method 3:
const FunctionDeclarations = () => {
  return <div>Function Declarations</div> 
}

export default FunctionDeclarations;

// Method 4: Not used much.
// let FunctionDeclarations;
// export default FunctionDeclarations = () => {
//   return <div>Function Declarations</div> 
// }