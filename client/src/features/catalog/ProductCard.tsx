import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/models/product"
import { Link } from "react-router-dom"

type Props = {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <Card
            elevation={3}
            sx={{
                width: 280, //（カードの幅を指定）
                borderRadius: 2, //（少し丸みを付ける）
                display: "flex", //（Flexboxを適用）
                flexDirection: "column", //（縦方向に要素を配置）
                justifyContent: "space-between", //（内容を均等に配置）  
            }}
        >
            <CardMedia
                sx={{ height: 240, BackgroundSize: 'cover' }} //it's going to cover the full amount of its available space.
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom
                    sx={{ textTransform: 'uppercase' }}
                    variant="subtitle2">
                    {product.name}
                </Typography>
                <Typography variant="h6"
                    sx={{ color: 'secondary.main' }}>
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between'}}
            >
                <Button>Add to cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
            </CardActions>

        </Card>
    )
}