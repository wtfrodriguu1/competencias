import './App.css';
import SkillList from './components/SkillList';
import Input from './components/Input';


function App() {

  const competencias = [
    {id: 1, name: "Lógica de programação"},
    {id: 2, name: "Resolução de problemas"}
  ];


  function addSkill(skill) {    
    let value = {id: competencias.length + 1, name: skill}
    competencias.push(value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Input addSkill={addSkill}/>
        <SkillList values={competencias}/>
        
      </header>
    </div>

  );
}

export default App;
