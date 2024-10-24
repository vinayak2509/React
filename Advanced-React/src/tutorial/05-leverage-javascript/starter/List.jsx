import { people } from "../../../data";
import { Person } from "./person";

const List = () => {
  // Capitalized the function name
  return (
    <div>
      <h1>Leverage Javascript</h1>
      {people.map((person) => {
        // Renamed the parameter
        return <Person key={person.name} {...person} />; // Used the renamed parameter
      })}
    </div>
  );
};

export default List; // Exporting the component with a capitalized name
