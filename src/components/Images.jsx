



const Images =({sources = [] }) =>{

return <div className="wrapper"> 
    {

    sources.map(( src ) => <img className="item" src={src} /> ) }
     </div>

}
export default  Images