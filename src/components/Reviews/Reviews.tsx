import React, { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material';

type Props = {};

type Review = {
    name: string;
    text: string;
};

const Reviews = (props: Props) => {
    const initialReviews: Review[] = [
        {
            name: 'Сергій',
            text: 'Гарний телефон. Як завжди. Однак, батарея до вечора не доживає',
        },
        {
            name: 'Володя',
            text: 'Сподобався дуже. Рекомендую цей телефон',
        },
        {
            name: 'Сашко',
            text: 'В цілому окей, але батарея не дуже довго тримає заряд',
        },
    ];

    const [reviews, setReviews] = useState<Review[]>(initialReviews);

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    });

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }));
    };

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }));
    };

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required');
        } else {
            setReviews((prevState) => [...prevState, newReview]);

            setNewReview({
                name: '',
                text: '',
            });
        }
    };

    return (
        <div>
            <Typography variant="h4" component="h2">
                Reviews
            </Typography>
            {reviews.map(({ name, text }, i) => (
                <Card variant="outlined" sx={{ margin: '30px 0' }} key={i}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default Reviews;
