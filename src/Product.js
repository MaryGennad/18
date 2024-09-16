
function Product(props) {

    return (
        <>
            <div className="product">
                <h2 key={props.index}>{props.product.name}</h2>
                
                <div className="block"><input value={props.product.name} onChange={(e) => {
                    props.onchange(e, 'name')
                    // console.log('Дочерний : ' + e.target.value);
                }} /></div>

                <div className="imgs"><img src={props.product.image} onChange={(e) => {
                    props.onchange(e, 'image')
                }} /></div>

                <input value={props.product.title} onChange={(e) => {
                    props.onchange(e, 'title')
                    // console.log('Дочерний : ' + e.target.value);
                }} />

                <input value={props.product.ingridients} onChange={(e) => {
                    props.onchange(e, 'title')
                    // console.log('Дочерний : ' + e.target.value);
                }} />

                <input value={props.product.description} onChange={(e) => {
                    props.onchange(e, 'description')
                    // console.log('Дочерний : ' + e.target.value);
                }} />
            </div>
        </>
    );
}

export default Product;
