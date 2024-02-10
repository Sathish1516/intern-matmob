import "./Searchresultslist.css";
import { Searchresult } from "./Searchresult";

export const Searchresultslist = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <Searchresult result={result.name} key={id} />;
      })}
    </div>
  );
};