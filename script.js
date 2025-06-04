const loadReviews = ()=>{
    const reviewsList = document.getElementById('reviews-list')
    for(const review of reviews){
        console.log(review)
        const el = createReviewElement(review)
        reviewsList.appendChild(el)

    }
    
}

const handleReviewSubmit = (e) =>{
    e.preventDefault()
    const bookTitle = document.getElementById('book-title').value
    const bookReview = document.getElementById('review-text').value
    const bookRating = document.getElementById('rating').value

    console.log(bookTitle)
    let review = {
        title:bookTitle,
        rating:bookRating,
        reviewText:bookReview,
        likes: 0 ,
        reposts: 0
    }

    const newReview = createReviewElement(review)
    const list = document.querySelector('#reviews-list')
    list.insertBefore(newReview, list.firstChild)
    e.target.reset()
}

const createReviewElement = (review) =>{
    const reviewElememnt = document.createElement('div')
    reviewElememnt.className = 'review-item'
    reviewElememnt.innerHTML = `
    <p>${review.title}</p>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button>Likes ${review.likes}</button>
    <button>Reposts${review.reposts}</button>
    `
console.log(reviewElememnt)
    return reviewElememnt
}

// createReviewElement()

document.addEventListener("DOMContentLoaded", () =>{
    loadReviews();
    const reviewForm = document.querySelector('#review-form')
    reviewForm.addEventListener("submit", (handleReviewSubmit))
})