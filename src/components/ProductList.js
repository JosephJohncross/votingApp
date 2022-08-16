import React, { Component } from "react";
import Product from "./Product";
import "../styles/index.css";

class ProductList extends Component {

    constructor(props, context){
        super(props)

        this.state = {
            products: []
        }
        
        this.handleProductUpVote = this.handleProductUpVote.bind(this)
        this.handleProductDownVote = this.handleProductDownVote.bind(this)
    }

    handleProductUpVote(productId){
        const nextProducts = this.state.products.map(product => {
            if (+product.id === productId) {
                return Object.assign({}, product, {
                    votes: `${+product.votes + 1}`,
                })
                
            }else{
                return product
            }
        })
        this.setState({
            products: nextProducts,
        })
    }

    handleProductDownVote(productId){
        const previousProducts = this.state.products.map(product => {
            if (productId === +product.id){
                return Object.assign({}, product, {
                    votes: `${+product.votes - 1}`,
                })
            }else{
                return product
            }
        })
        this.setState({
            products: previousProducts
        })
    }

    componentDidMount() {
        this.setState({ products: this.props.product_list})
    }

    render() {

    const sortedProduct = this.state.products.sort(
        (a, b) => +b.votes - +a.votes
    );

    const productComponents = sortedProduct.map((product) => (
        <Product
        key={'product' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onUpVote = {this.handleProductUpVote}
        onDownVote = {this.handleProductDownVote}
        />
    ));

    return (
        <div className="md:flex-col md:justify-center md:items-center md:max-w-[1024px] mx-auto md:m-0 p-10">
        {productComponents}
        </div>
    );
  }
}

export default ProductList;
