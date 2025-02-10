import Product from "./Products";


const ProductList: React.FC = () =>{
    const products : Product[] = [
        {
            name : "zephyrus G14",
            description : "High-Performance laptop for work and play",
            price : "$999",
            imageUrl : "https://m.media-amazon.com/images/I/91qguXr7q1L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name : "Samsung S25",
            description : "Just buy iphone dawg, it isn't worth it.",
            price : "$100000",
            imageUrl : "https://images-cdn.ubuy.co.id/6668b80ebcd55c0f740671f8-kids-toys-barbie-mobile-phone-for-kids.jpg"
        },
        {
            name : "Iphone 16",
            description : "Perfect for insecure losers who needs extra validation.",
            price : "$999999",
            imageUrl : "https://images.unsplash.com/photo-1727093493751-73e913a3dd82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name : "Valve Index",
            description : "One way ticket to gooner's utopia.",
            price : "$1999",
            imageUrl : "https://plus.unsplash.com/premium_photo-1663091701962-2ae72a2ad2ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dnJ8ZW58MHx8MHx8fDA%3D"
        },
        {
            name : "Ultrakill",
            description : "🗣 🗣📢 BEST GAEMMM !!!!, ONLY FOR ONE DOLLARR !?!?.",
            price : "$1",
            imageUrl : "https://i.redd.it/8mbpm1h96o7b1.png"
        },
        {
            name : "Moondrop Golden Ages",
            description : "For your hog squeezing needs, tissue not included.",
            price : "$2",
            imageUrl : "https://portableaudio.co.id/wp-content/uploads/2024/08/12_b1f4d49f-9f1f-4e70-a104-1c4a9b8283b4_2048x.png"
        },
        

    ]
    return(
        // <> == fragments
        <>
            <h1>Product List</h1>
            {
                products.map((product, index) =>{

                    // ... == spread syntax
                    return <Product key={index} {...product}/>

                    // gini juga bisa
                    // return <Product key={index} name={product.name} price={product.price} description={product.description} imageUrl={product.imageUrl}  />

                }) 
            }
        </>
    )
}

export default ProductList;