import react, { useEffect, useState , useMemo } from 'react';


const HOC =(WrappedComponent, entity) =>{

    return function HOCfunction() {
        const [data,setData] = useState([]);
        const [term,setTerm] = useState("");

        useEffect(()=>{
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                setData(json);
            }
            fetchData();
        },[entity]);

        const filteredData = useMemo(() => {
            return data.slice(0, 10).filter((d) => {
              if (entity === "users") {
                return d.name.toLowerCase().includes(term.toLowerCase());
              }
              if (entity === "todos") {
                return d.title.toLowerCase().includes(term.toLowerCase());
              }
              return false;
            });
          }, [data, term, entity]);

          return (
            <div>
              <h2>{entity}</h2>
              <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <WrappedComponent data={filteredData}/>
            </div>
          );
    }
}

export default HOC;