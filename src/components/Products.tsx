interface Product {
    name : string;
    description : string;
    price : string;
    imageUrl : string;
}

//React.FC == react functional component
// parameternya hasil destructuring dari object product
const Product : React.FC<Product> = ({name, description,price,imageUrl}) => {
    return (
        <div className="product" style={{border: "1px solid black", margin: "20px", borderRadius:"20px"}}>
           <img src={imageUrl} alt="name" className="product-image" width={100} height={100}/>
           <h3>{name}</h3>
           <p>{description}</p>
           <p>Price : {price}</p>
        </div>
    )
}

export default Product;