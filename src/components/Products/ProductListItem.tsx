
import React from 'react'

import {
    TextField,
    Button,
    Card,
    CardActions,
    CardContent,
} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
}

class ProductListItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
        }
        this.onIncrementClick = this.onIncrementClick.bind(this)
        
    }

    onIncrementClick() {
        console.log(this)
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

   

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="product-title">{title}</h4>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div className="product-price">Price: $ {price}</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField value={this.state.count} size="small" />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                    <CardActions className="btn-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

// const ProductListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {
// }

export default ProductListItem