

function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

var ID = 0;
var seconds = 0;
var moves = 0;

function printTime()
{
  document.getElementById("Timer").innerHTML=seconds + "s";
  seconds++;
}

function printMoves()
{
  document.getElementById("MoveCounter").innerHTML= moves;
}

function shuffle() {
//Use nested loops to access each cell of the 3x3 grid
for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
   for (var column=1;column<=3;column++) { //For each column in this row
  
    var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
    var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
     
    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  } 
}

seconds=0;
ID=window.setInterval(printTime,1000);
moves=0;
printMoves();

}

function pause()
{
  window.clearInterval(ID);
  document.getElementsByClassName("PauseButton")[0].innerHTML="Resume";
  // var PauseBtn = document.getElementsByClassName("PauseButton")[0];
  // PauseBtn.classList.add("ResumeButton");
}

// function resume()
// {
//   ID=window.setInterval(printTime,1000);
// }

// var ResumeBtn = document.getElementsByClassName("ResumeButton")[0];
// console.log(ResumeBtn);
// ResumeBtn.addEventListener("click", e => {
//   resume();
//   document.getElementsByClassName("PauseButton")[0].innerHTML="Pause";
// })

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile9") { 
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           moves++;
           printMoves();
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           moves++;
           printMoves();
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           moves++;
           printMoves();
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           moves++;
           printMoves();
           return;
         }
       } 
  }
  
}

// const whichTile = document.querySelectorAll('.cell')



// whichTile.forEach(whichTile => {
//   console.log(whichTile.className);
// })



function tellClassName(element,row,column) {
  var theClass = element.className;
  console.log(theClass);
  clickTile(row,column);
}




const Tile1 = document.querySelector('.tile1')
const Tile2 = document.querySelector('.tile2')
const Tile3 = document.querySelector('.tile3')
const Tile4 = document.querySelector('.tile4')
const Tile5 = document.querySelector('.tile5')
const Tile6 = document.querySelector('.tile6')
const Tile7 = document.querySelector('.tile7')
const Tile8 = document.querySelector('.tile8')
const Tile9 = document.querySelector('.tile9')

Tile1.addEventListener("click", e => {
  clickTile(1,1);
})

Tile2.addEventListener("click", e => {
  clickTile(1,2);
})

Tile3.addEventListener("click", e => {
  clickTile(1,3);
})

Tile4.addEventListener("click", e => {
  clickTile(2,1);
})

Tile5.addEventListener("click", e => {
  clickTile(2,2);
})

Tile6.addEventListener("click", e => {
  clickTile(2,3);
})

Tile7.addEventListener("click", e => {
  clickTile(3,1);
})

Tile8.addEventListener("click", e => {
  clickTile(3,2);
})

Tile9.addEventListener("click", e => {
  clickTile(3,3);
})




Tile1.addEventListener("touchstart", e => {
  clickTile(1,1);
})

Tile2.addEventListener("touchstart", e => {
  clickTile(1,2);
})

Tile3.addEventListener("touchstart", e => {
  clickTile(1,3);
})

Tile4.addEventListener("touchstart", e => {
  clickTile(2,1);
})

Tile5.addEventListener("touchstart", e => {
  clickTile(2,2);
})

Tile6.addEventListener("touchstart", e => {
  clickTile(2,3);
})

Tile7.addEventListener("touchstart", e => {
  clickTile(3,1);
})

Tile8.addEventListener("touchstart", e => {
  clickTile(3,2);
})

Tile9.addEventListener("touchstart", e => {
  clickTile(3,3);
})




document.addEventListener("keydown", e => {
  if(e.keyCode == '39') {
    const cellTile9 = document.getElementsByClassName('tile9')[0].id
   
    if(cellTile9 == 'cell12')
    {
      swapTiles(cellTile9, "cell11")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell13')
    {
      swapTiles(cellTile9, "cell12")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell22')
    {
      swapTiles(cellTile9, "cell21")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell23')
    {
      swapTiles(cellTile9, "cell22")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell32')
    {
      swapTiles(cellTile9, "cell31")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell33')
    {
      swapTiles(cellTile9, "cell32")
      moves++;
      printMoves();
    }

  }

  //left
  if(e.keyCode == '37') {
    const cellTile9 = document.getElementsByClassName('tile9')[0].id
   
    if(cellTile9 == 'cell12')
    {
      swapTiles(cellTile9, "cell13")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell11')
    {
      swapTiles(cellTile9, "cell12")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell22')
    {
      swapTiles(cellTile9, "cell23")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell21')
    {
      swapTiles(cellTile9, "cell22")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell32')
    {
      swapTiles(cellTile9, "cell33")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell31')
    {
      swapTiles(cellTile9, "cell32")
      moves++;
      printMoves();
    }

  }

  //down
  if(e.keyCode == '40') {
    const cellTile9 = document.getElementsByClassName('tile9')[0].id
   
    if(cellTile9 == 'cell21')
    {
      swapTiles(cellTile9, "cell11")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell22')
    {
      swapTiles(cellTile9, "cell12")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell23')
    {
      swapTiles(cellTile9, "cell13")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell31')
    {
      swapTiles(cellTile9, "cell21")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell32')
    {
      swapTiles(cellTile9, "cell22")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell33')
    {
      swapTiles(cellTile9, "cell23")
      moves++;
      printMoves();
    }

  }

  //up
  if(e.keyCode == '38') {
    const cellTile9 = document.getElementsByClassName('tile9')[0].id
   
    if(cellTile9 == 'cell11')
    {
      swapTiles(cellTile9, "cell21")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell12')
    {
      swapTiles(cellTile9, "cell22")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell13')
    {
      swapTiles(cellTile9, "cell23")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell21')
    {
      swapTiles(cellTile9, "cell31")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell22')
    {
      swapTiles(cellTile9, "cell32")
      moves++;
      printMoves();
    }

    if(cellTile9 == 'cell23')
    {
      swapTiles(cellTile9, "cell33")
      moves++;
      printMoves();
    }

  }
})

