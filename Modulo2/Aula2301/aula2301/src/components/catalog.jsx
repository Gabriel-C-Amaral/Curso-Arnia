import movies from "./movies"


const Catalog = () => {
    return (
        <div className='catalogContent'>
            <h1>Catalogo</h1>
           {movies.map((item, index) => (
                <div key={index} className='col-4'> 
                {item.title}
                </div>
            ))}
        </div>
    )
}

export default Catalog