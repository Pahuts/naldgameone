// memory game
// write variables
// write function names first

var level = 0
var gameColors = ['green', 'red', 'yellow', 'blue']
var gamePattern = []
var userClickPattern = []
var started = false

// start game when a key is pressed
$(document).keypress(function (e) {
  if (!started) {
    gameSequence()
    started = true
    $('#level-title').css('color', '#8A39E1')
  } else {
    if(e.key === 1) {
      var buttonColor = "green"
      userClickPattern.push(buttonColor)
      animateClick(buttonColor)
      // pass the last selected character for checking
      checkAnswer(userClickPattern.length - 1)
    } else if (e.key === 2) {
      var buttonColor = "red"
      userClickPattern.push(buttonColor)
      animateClick(buttonColor)
      // pass the last selected character for checking
      checkAnswer(userClickPattern.length - 1)
    } else if (e.key === 3) {
      var buttonColor = "blue"
      userClickPattern.push(buttonColor)
      animateClick(buttonColor)
      // pass the last selected character for checking
      checkAnswer(userClickPattern.length - 1)
    } else if (e.key === 4) {
      var buttonColor = "yellow"
      userClickPattern.push(buttonColor)
      animateClick(buttonColor)
      // pass the last selected character for checking
      checkAnswer(userClickPattern.length - 1)
    }
  }
})



//button click event
$('.btn').click(function () {
  if (started) {
    var buttonColor = $(this).attr('id')
    userClickPattern.push(buttonColor)
    animateClick(buttonColor)
    // pass the last selected character for checking
    checkAnswer(userClickPattern.length - 1)
  } else {
    console.log('game not yet started')
  }
})

// show animation when a button is clicked
function animateClick (buttonClicked) {
  $('#' + buttonClicked).addClass('pressed')
  setTimeout(function () {
    $('#' + buttonClicked).removeClass('pressed')
  }, 150)
}
function gameSequence () {
  // reset user sequence ever time this function is called
  userClickPattern = []
  level++
  $('#level-title').text('Level ' + level)

  if (level % 10 === 0) {
    $('body').addClass('tenlevels')
    setTimeout(function () {
      $('body').removeClass('tenlevels')
    }, 500)
  }
  // randomizer for sequence
  var randomNumber = Math.floor(Math.random() * 4)
  var randomColor = gameColors[randomNumber]
  gamePattern.push(randomColor)

  $('#' + randomColor)
    .fadeIn(250)
    .fadeOut(250)
    .fadeIn(250)
}
function checkAnswer (level) {
  console.log('Game Pattern: ' + gamePattern[level])
  console.log('User Pattern: ' + userClickPattern[level])
  if (gamePattern[level] === userClickPattern[level]) {
    if (gamePattern.length === userClickPattern.length) {
      console.log('success')
      setTimeout(function () {
        gameSequence()
      }, 500)
    }
  } else {
    console.log('game over')

    gameOver()
  }
}
function gameOver () {
  $('#level-title').text('Game Over. Press Any Key to Start Over')
  $('#level-title').css('color', '#FF1818')
  $('body').addClass('game-over')
  setTimeout(function () {
    $('body').removeClass('game-over')
    $('#level-title').removeClass('game-over-text')
  }, 250)
  restartGame()
}
function restartGame () {
  started = false
  level = 0
  gamePattern = []
}
