"use client"

export const Test = () => {

    const handleShare = async () => {
        if (navigator?.share) {
            navigator.share({
                title: "MDN",
                text: "Learn web development on MDN!",
                url: "https://developer.mozilla.org",
            }).then((result) => {
                console.log({result})}).catch((err) => {
                console.log({err})})
                console.log({err})})
        } else  {
            alert('wrong')
        }
    }
    return (
        <button onClick={handleShare}>Share</button>
    )
}