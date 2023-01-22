// Import useState
import { useState } from 'react'

const App = () => {
  // ! Element
  // Player Choices
  const optionChoice = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
  const title = ['R.P.S.L.S']

  // ! State
  // Start count from index 0
  const [playerChoice, setPlayerChoice] = useState(0)

  // Computer choice state
  const [compChoice, setCompChoice] = useState(0)

  // ! Effect
  const pageTitle = () => {
    document.title = [title]
  }
  pageTitle()

  // ! Execution
  // Execution to randomise computer choice
  const randomChoice = () => {
    const randomOption =
      optionChoice[Math.floor(Math.random() * optionChoice.length)]
    setCompChoice(randomOption)
    console.log(randomOption)
  }

  // Buttons clickable
  const buttonClicked = (updatedChoice) => {
    randomChoice()
    setPlayerChoice(updatedChoice)
    console.log(updatedChoice)
  }

  // Display for results
  const resultsDisplay = () => {
    // If neither are picked then you get nothing.
    if (!compChoice && !compChoice) {
      return ''
      // Both pick the same
    } else if (compChoice === playerChoice) {
      return 'Draw!'
      // All ways that the player can win
    } else if (
      (compChoice === 'Paper' && playerChoice === 'Scissors') ||
      (compChoice === 'Rock' && playerChoice === 'Paper') ||
      (compChoice === 'Scissors' && playerChoice === 'Rock') ||
      (compChoice === 'Rock' && playerChoice === 'Spock') ||
      (compChoice === 'Spock' && playerChoice === 'Paper') ||
      (compChoice === 'Scissors' && playerChoice === 'Spock') ||
      (compChoice === 'Paper' && playerChoice === 'Lizard') ||
      (compChoice === 'Spock' && playerChoice === 'Lizard') ||
      (compChoice === 'Lizard' && playerChoice === 'Rock')
    ) {
      return 'You win!'
      // Reverse for losing
    } else {
      return 'You lose :('
    }
  }

  // ! JSK
  return (
    <>
      <main>
        <div>
          <h1 className="title">Rock Paper Scissors Lizard Spock</h1>
        </div>
        <div className="container">
          <div className="game">
            {/* <h2>Number of Games: {numPlays}</h2> */}
            {/* Button clicked function updates the player choice using the setPlayer choice and creates a new value*/}
            {/* randomOption function does the same thing here where we are getting the random choice from options which then is linked to setCompChoice which creates a new value */}
            <h2>Computer Choice: {compChoice}</h2>
            <h2>Player Choice: {playerChoice}</h2>
            {/* Executes the function and the displays it in a h1 */}
            <h1>{resultsDisplay()}</h1>
          </div>
          {/* Here is where we map through the options and when a 'button' is clicked, each individual button is mapped (option) being displayed on the webpage with individual buttons */}
          {optionChoice.map((option) => {
            return (
              <div key={option}>
                {/* click function leading to output of button that was clicked */}
                <button
                  className="buttons"
                  onClick={() => buttonClicked(option)}
                >
                  {option}
                </button>
              </div>
            )
          })}
          {/* Restart the game with empty arrays = no selection to start again */}
          <button
            onClick={() => {
              setCompChoice('')
              setPlayerChoice('')
            }}
          >
            Restart Game
          </button>
        </div>
      </main>
    </>
  )
}

export default App

// const [numPlays, setNumPlays] = React.useState(-1)
// React.useEffect(() => {
//   setNumPlays(numPlays + 1)
// }, [playerChoice, compChoice])

// return (
//   <>
//     <div>
//       <h1>Rock Paper Scissors</h1>
//       <Main selections={selections}/>
//     </div>
//   </>
// )
