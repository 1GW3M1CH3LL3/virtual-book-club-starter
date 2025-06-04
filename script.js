const loadReviews = ()=>{
    const reviewsList = document.getElementById('reviews-list')
    for(const review of reviews){
        console.log(review)
        const el = createReviewElement(review)
        reviewsList.appendChild(el)

    }
    
}

const handleReviewSubmit = () =>{
    console.log("miib")
}

const createReviewElement = (review) =>{
    const reviewElememnt = document.createElement('div')
    reviewElememnt.className = 'review-item'
    reviewElememnt.innerHTML = `
    <p>${review.title}</p>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button>Likes (5)</button>
    <button>Reposts(5)</button>
    `
console.log(reviewElememnt)
    return reviewElememnt
}

// createReviewElement()

document.addEventListener("DOMContentLoaded", () =>{
    loadReviews();
    document.addEventListener("submit", () =>{})
})