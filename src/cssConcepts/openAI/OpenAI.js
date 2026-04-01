import { useState } from "react"




import OpenAISDK from "openai"

import './styles.css'

const openai = new OpenAISDK({
    apiKey: "",
    dangerouslyAllowBrowser: true
});



/*
    there is a Movies table in my database schema and it has a bunch of movies and each movie has some attributes like movie name, revenue earned, ratings, release date and so on. generate a SQL query to find all the movies with rating more than 5
*/

const responseData = [
    ['h1', 'h2', 'h3', 'h4'],
    ['v1', 'v2', 'v3', 'v4'],
    ['v11', 'v22', 'v33', 'v44'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
    ['v111', 'v222', 'v333', 'v444'],
]

const fetchData = () => {
    return Promise.resolve(responseData)
}

export const OpenAI = () => {

    const [text, setInputText] = useState('')

    const [fetchedData, setFetchedData] = useState([])

    const fetchQueryResult = async () => {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {"role": "user", "content": text}
            ]
        })
        console.log('@@@', completion)
    }

    const renderResult = () => {
        return (
            <div>
                <p>results for: {text}</p>
                <div className="resultContainer">
                    <table>
                        {
                            fetchedData.length ? fetchedData.map((tableRow) => {
                                return (
                                    <tr key={tableRow.join('')}>
                                        {
                                            tableRow.map((cellData) => {
                                                return (
                                                    <td key={cellData}>{cellData}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                            : null
                        }
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            {renderResult()}
            <div className="promptContainer">
                <input type="text" value={text} onChange={(e) => {
                    setInputText(e.target.value)
                }}>

                </input>
                {/* <button onClick={fetchQueryResult}>Submit</button> */}
                <button onClick={() => {
                    fetchData().then(setFetchedData)
                }}>Submit</button>
            </div>

        </div>
    )
}