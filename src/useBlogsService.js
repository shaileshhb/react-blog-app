import { useState, useEffect } from "react"

// Custom hook
const useBlogsService = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // "http://localhost:8000/blogs"

    useEffect(() => {

        const abortConst = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortConst.signal })
            .then(response => {
                if (!response.ok) {
                    throw Error("Data not found")
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(error => {
                if (error.name === "AbortError") {
                    console.log("aborted");
                    return
                }
                console.error(error.message);
                setError(error.message)
                setIsLoading(false)
            })
        }, 1000)

        // cleanup function

        return () => abortConst.abort()

    }, [url])

    return {
        data, 
        isLoading,
        error
    }
}

export default useBlogsService