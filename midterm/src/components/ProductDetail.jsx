const ProductDetail = ({ id }) => {
   const [product, setProduct] = useState(null);
 
   useEffect(() => {
     fetch('/db.json')
       .then(response => response.json())
       .then(data => {
         const product = data.products.find(product => product.id === id);
         setProduct(product);
       });
   }, [id]);
 
   if (!product) {
     return <div>Loading...</div>;
   }
 
   return (
     <>
       <button onClick={history.goBack}>Back</button>
       <img src={product.image} alt={product.title} />
       <h2>{product.title}</h2>
       <p>{product.description}</p>
       <p>{product.price}</p>
     </>
   );
 };

 export default ProductDetail;