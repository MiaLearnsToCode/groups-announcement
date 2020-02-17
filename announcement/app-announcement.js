//groups is an obj & is imported from groups.js

const init = () => {
  
  const root = document.querySelector('#root')

  const createCards = () => {
    Object.keys(groups).map(group => {
      
      //create the elements
      const cardBack = document.createElement('div')
      const cardBackTitle = document.createElement('h3')
      const cardFront = document.createElement('div')

      //add the styles
      cardBack.classList.add('cardBack')      
      cardFront.classList.add('cardFront')

      //set the title of each card
      cardBackTitle.innerHTML = `Group: ${group}`

      //look up the array of members of a group
      const groupArray = groups[group]
      
      //create a p for each group member
      groupArray.map(groupMember => {
        const member = document.createElement('p')
        member.innerHTML = groupMember
        cardFront.appendChild(member)
      })

      //when each card is clicked
      cardBack.addEventListener('click', () => {
        
        //hide the title
        cardBackTitle.style.display = 'none'

        //and display the members one by one
        cardFront.childNodes.forEach((child, index) => {
          const time = index * 800
          setTimeout(() => {
            child.style.display = 'block'
          }, time)
        })
      })

      //append elements
      root.appendChild(cardBack)
      cardBack.appendChild(cardBackTitle)
      cardBack.appendChild(cardFront)
    })
  }

  createCards()
}

window.addEventListener('DOMContentLoaded', init)