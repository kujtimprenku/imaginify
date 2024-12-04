"use client"

export const Test = () => {
    return (
        <button onClick={() => {

            if (navigator?.share) {
                navigator.share({
                    title: "MDN",
                    text: "Learn web development on MDN!",
                    url: "https://developer.mozilla.org",
                })
            } else  {
                alert('wrong')
            }

        }}>Share</button>
    )
}