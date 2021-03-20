const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', function() {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(function(){ Math.random() - 1.25})
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 55 + 98?',
    answers: [
      { text: '153', correct: true },
      { text: '154', correct: false },
      { text: '152', correct: false },
      { text: '155', correct: false }
    ]
  },
  {
    question: 'Which sea creature has three hearts? ',
    answers: [
      { text: 'Fish', correct: false },
      { text: 'Tiger', correct: false },
      { text: 'Octopus', correct: true },
      { text: 'Sharke', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'How many bones does an adult human have?',
    answers: [
      { text: '207', correct: false },
      { text: '213', correct: false },
      { text: '155', correct: false },
      { text: '206', correct: true },
    ]
  },
  {
    question: '3>2>1 === false ?',
    answers: [
      { text: 'False', correct: false },
      { text: 'True', correct: true }
    ]
  },
  {
    question: 'JavaScript is a ___ -side programming language.',
    answers: [
      { text: 'Client', correct: false },
      { text: 'Server', correct: false },
      { text: 'Both', correct: true },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is one quarter of 1,000? ',
    answers: [
      { text: '1.000', correct: false },
      { text: '500', correct: false },
      { text: '750', correct: false },
      { text: '250', correct: true }
    ]
  },
  {
    question: 'Which Russian town suffered an infamous nuclear disaster in 1986?',
    answers: [
      { text: 'Chernobyl', correct: true },
      { text: 'Moscow', correct: false }
    ]
  },
  {
    question: 'Which team won the uefa champions league in 2015?',
    answers: [
      { text: 'Barcelona', correct: true },
      { text: 'Manchester united', correct: false },
      { text: 'Bayern', correct: false },
      { text: 'Milan', correct: false }
    ]
  },
  {
    question: 'Capital of Germany?',
    answers: [
      { text: 'Humburg', correct: false },
      { text: 'Munich', correct: false },
      { text: 'Berlin', correct: true },
      { text: 'Sttutgart', correct: false }
    ]
  }
]