import ItemBusqueda from "./ItemBusqueda";

const ResultadoBusqueda = ({search, setSearch, dictionaryArray}) => {    
    console.log("dictionaryArray");
    console.log(dictionaryArray);
    console.log(search);
    return(
        <>
            {
                search && (
                    dictionaryArray.map((item) =>{
                        return(
                            <ItemBusqueda key={item.id} item={item} search={search} setSearch={setSearch} />
                        )
                    })
                )
            }            
        </>
    );
};

export default ResultadoBusqueda;