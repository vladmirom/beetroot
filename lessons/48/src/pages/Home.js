import Parent from '../components/Parent';
import FunctionDeclarations from '../components/FunctionDeclarations'
import ParentHooks from '../components/ParentHooks'
import Square from '../components/Square'
import GrandparentContext from '../components/context/GrandparentContext'

function Home() {
  return (
    <div>
     <Parent/>
     <FunctionDeclarations/>
     <ParentHooks/>
     <Square a={4} title={'Square title'}/>
     <GrandparentContext/>
    </div>
  );
}

export default Home;
