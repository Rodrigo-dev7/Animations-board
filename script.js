let selectedMenuid = 1;

const menu = document.querySelector('#menu')
const boardLeft = document.querySelector('#board-left')
const boardRight = document.querySelector('#board-right')
const flexBoard = document.querySelector('#flex-board')
const illustration = document.querySelector('#illustration')
const contentList = [
  { img: "https://i.pinimg.com/originals/c7/c4/7d/c7c47df2029f48c112eee65625f9ef8b.png" },
  { img: "https://images.vexels.com/media/users/3/158558/isolated/preview/60b6cba6210b4313e1168a74976a9039-menina-swimsuit-flor-surfboard-apartamento-by-vexels.png" },
  { img: "https://i.imgur.com/0IGqo2X.png" }
]


document.querySelector('#bl-1').scrollIntoView();
menu.addEventListener('click', changeContent)

function changeContent(event) {
  const target = event.target.id;

  if (target === 'menu' || target === '' || target === selectedMenuid) {
    return
  }
  // Seleção do menu
  document.getElementById(target).classList.add('selected')
  document.getElementById(selectedMenuid).classList.remove('selected')

  // Scroll dos boards
  const offset = selectedMenuid - target;
  boardLeft.scrollTop -= offset * 370;
  boardRight.scrollTop += offset * 370;

  // flex board controll
  flexBoard.classList.add('flex-board-close')
  setTimeout(() => {
    illustration.src = contentList[target - 1].img
    flexBoard.classList.remove('flex-board-close')
    flexBoard.classList.add('flex-board-open')
  }, 400);

  selectedMenuid = target;
}