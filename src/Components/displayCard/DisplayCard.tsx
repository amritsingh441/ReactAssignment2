import React from 'react';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import News from '../../model/News';
import Button from '@material-ui/core/Button';
import SaveNews from '../../service/SaveNews';


const DisplayCard = (props:any) => {    
return <div>
        <Card>
            <CardContent>
                <Link id="imageUrl" href="#">{props.nData.urlToImage}</Link>
                <p id="title">{props.nData.title}</p>
                <div id="author">{props.nData.author}</div>
                <Button variant="contained" color="primary" onClick ={() => SaveNews(props.nData)}>Add To Favourites</Button>
            </CardContent>
        </Card>
    </div>
}

export default DisplayCard;