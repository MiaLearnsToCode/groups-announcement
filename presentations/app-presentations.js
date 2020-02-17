//groups is an obj & is imported from groups.js

const init = () => {
  const groupNames = Object.keys(groups)
  const rootDiv = document.querySelector('#root')
  const shuffledArray = []
  

  const display = (num) => {
    const shuffleButton = document.querySelector('button')
    shuffleButton.parentNode.removeChild(shuffleButton)

    const prevGroup = document.querySelector('h2')
    prevGroup.parentNode.removeChild(prevGroup)

    const group = document.createElement('h2')
    group.classList.add('group-name')
    group.innerHTML = shuffledArray[num]

    rootDiv.appendChild(group)

    if (num < shuffledArray.length - 1) {
      const nextButton = document.createElement('button')
      nextButton.innerHTML = 'Next Group'

      nextButton.addEventListener('click', () => {
        if (num < shuffledArray.length - 1) display(num + 1)
      })

      rootDiv.appendChild(nextButton)
    } else {

      const partyEmoji = document.createElement('h2')
      partyEmoji.innerHTML = '🎉' 
      rootDiv.appendChild(partyEmoji)
    }
     
    
  }

  const shuffle = (num, groupNames) => {
    if (num < groupNames.length - 1) shuffle(num + 1, groupNames) 

    const random = Math.ceil(Math.random() * num)
    const pickedGroup = groupNames[random]

    groupNames.splice(random, 1) 
    shuffledArray.push(pickedGroup)
  }

  const shuffleButton = () => {
    const shuffleButton = document.createElement('button')
    shuffleButton.innerHTML = 'Who is going up first?'

    const h2 = document.createElement('h2')
    h2.innerHTML = '🎙'

    shuffleButton.addEventListener('click', () => {
      shuffle(0, groupNames)
      display(0)
    })

    rootDiv.appendChild(h2)
    rootDiv.appendChild(shuffleButton)

  }

  shuffleButton()
}

window.addEventListener('DOMContentLoaded', init)