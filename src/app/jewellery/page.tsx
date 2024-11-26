import Image from "next/image"

export default function JewelleryPage(){

  const jewellerySet=[
    {
        id:1, name:"Royal Bridal Set", price: 31999, image:"/jewellery-pic1.jpeg"
        
    },
    {
        id:2, name:"Gul Bahar Bridal Set", price: 22499, image:"/jewellery-pic2.jpeg"
        
    },
    {
        id:3, name:"Moonstone Bridal Set", price: 31999, image:"/jewellery-pic3.jpeg"
        
    },
    {
        id:4, name:"Asha Bridal Set", price: 15999, image:"/jewellery-pic4.jpeg"
        
    },
    {
        id:5, name:"Sitara Bridal Set", price: 41999, image:"/jewellery-pic5.webp"
        
    },
    {
        id:6, name:"Charm Bridal Set", price: 29999, image:"/jewellery-pic6.jpeg"
        
    },
    {
        id:7, name:"Noor Jahan Bridal Set", price: 28999, image:"/jewellery-pic7.jpeg"
        
    },
    {
        id:8, name:"Roshan Bridal Set", price: 41999, image:"/jewellery-pic8.jpeg"
        
    },
  ]    
    return(
        <div>
            <div className="jewellery">
                {jewellerySet.map((jewellery)=>(
                    <div key={jewellery.id} className="jewellery-card">
                        <Image src={jewellery.image} alt={jewellery.name} />
                        <h3>{jewellery.name}</h3>
                        <div className="price">Rs.{jewellery.price}</div>
                        <button>Add to Cart</button>

                    </div>
                ))}
            </div>
        </div>
    )
}