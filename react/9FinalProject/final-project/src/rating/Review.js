import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {db} from "../firebase";
import { getDoc, doc, collection, addDoc, where, getDocs, updateDoc, query} from  "firebase/firestore";
import { toast } from "react-toastify";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from "../store/AuthContext";
import { Container, Course, Radio, Rating, Review } from "./RaviewStyles";

const Rate = () => {
	const [rate, setRate] = useState(0);
	const [item, setItem] = useState([]);
	const [review, setReview] = useState('');
	const [anonymous, setAnonymous] = useState(false);
	//const [reviewList, setReviewList] = useState([]);
  	const {id} = useParams();
	const ctxUser = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() =>{

		const coursesCollection = collection(db,"courses");
		const resultDoc = doc(coursesCollection, id);
		const query = getDoc(resultDoc);
		
		query  
			.then((result) => {
			const data = result.data();
			data.id=result.id;
			setItem(data);
			})
			.catch((error) => {
			toast.error(error.message);
			})
	}, [id]);

	const handleReview = (e) => {
		setReview(e.target.value);
	};

	const handleAnonymous = () => {
		setAnonymous(!anonymous);
	};

	const handleSave = () => {
		console.log(review);
		console.log(rate);
		console.log(anonymous);

		const reviewCollection = collection(db, "reviews");

        const reviewData = {
            userId: ctxUser.userId,
			email: ctxUser.email,
            courseId: item.id,
            review: review,
            rate: rate,
			anonymous: anonymous
        };

        const searchReview = addDoc(reviewCollection, reviewData);

        searchReview
            .then((result) => {
                console.log('Review added');
				handleAverage();
                navigate('/courses');
            })
            .catch((error) => {
                toast.error(error.message)
            });
		
	};

	const handleAverage = async () => {
		const reviewCollection = collection(db, "reviews");
		const filter = query(reviewCollection, where("courseId", "==", item.id));
		const search = getDocs(filter);
		let avg = 0;

		await search
			.then((result)=>{
		
			const reviews = result.docs.map(doc=>{
				const reviewWithId = doc.data();
				reviewWithId.id = doc.id;
				return reviewWithId;
			})
		
			//setReviewList(reviews);
			console.log('reviews');
			console.log(reviews);

			let sum = 0;

			for(let i=0; i<reviews.length; i++){
			sum += reviews[i].rate;
			console.log(reviews[i].rate);
			}

			avg = sum/reviews.length;

			})
			.catch((error)=>{
			toast.error(error.message);
			});

			item.avgRate = avg;

			updateDoc(doc(db, "courses",  item.id), 
				item
			)
			.then((result) => {
				console.log('Avg Rate Updated');
			})
			.catch((error) => {
				toast.error(error.mesage);
			});
	};

	return (
		<>
			<Course>
				<h1>{item.name}</h1>
				<p>{item.description}</p>
			</Course>
			<Container>
				{[...Array(5)].map((item, index) => {
					const givenRating = index + 1;
					return (
						<label>
							<Radio
								type="radio"
								value={givenRating}
								onClick={() => {
									setRate(givenRating);
								}}
							/>
							<Rating>
								<FaStar
									color={
										givenRating < rate || givenRating === rate
											? "rgb(212,175,55)"
											: "rgb(192,192,192)"
									}
								/>
							</Rating>
						</label>
					);
				})}
			</Container>
			<Review>
			<textarea
				editable
				multiline
				numberOfLines={4}
				maxLength={40}
				onChange={handleReview}
				style={{padding: 10}}
			/>
			<label>
				Anonymous review 
				<input type="checkbox" id="anonymous" name="anonymous " value="Yes" onChange={handleAnonymous}/>
			</label>
			<button onClick={handleSave}>Save</button>
			</Review>
		</>
		
	);
};

export default Rate;
