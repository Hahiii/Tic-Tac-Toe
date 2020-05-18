function checkHorizontal(arr, player) {
  let row1 = 0;
  let row2 = 0;
  let row3 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].value === player) {
        if (i === 0) row1++;
        else if (i === 1) row2++;
        else if (i === 2) row3++;
      }
    }
  }
  return row1 === 3
    ? "row1"
    : row2 === 3
    ? "row2"
    : row3 === 3
    ? "row3"
    : false;
}

function checkVertical(arr, player) {
  let col1 = 0;
  let col2 = 0;
  let col3 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].value === player) {
      col1++;
    }
    if (arr[i][1].value === player) {
      col2++;
    }
    if (arr[i][2].value === player) {
      col3++;
    }
  }
  return col1 === 3
    ? "col1"
    : col2 === 3
    ? "col2"
    : col3 === 3
    ? "col3"
    : false;
}

function checkDiagonal(arr, player) {
  let diagonalLeft = 0;
  let diagonalRight = 0;
  let x = 0;
  while (x < arr.length) {
    if (x === 0) {
      if (arr[0][0].value === player) {
        diagonalLeft++;
      }
      if (arr[0][2].value === player) {
        diagonalRight++;
      }
    }
    if (x === 1) {
      if (arr[1][1].value === player) {
        diagonalLeft++;
        diagonalRight++;
      }
    }
    if (x === 2) {
      if (arr[2][0].value === player) {
        diagonalRight++;
      }
      if (arr[2][2].value === player) {
        diagonalLeft++;
      }
    }
    x++;
  }
  return diagonalLeft === 3
    ? "diagonalLeft"
    : diagonalRight === 3
    ? "diagonalRight"
    : false;
}

export function getWinner(arr, player) {
  let winningHorizontal = checkHorizontal(arr, player);
  let winningVertical = checkVertical(arr, player);
  let winningDiagonal = checkDiagonal(arr, player);

  return winningHorizontal
    ? winningHorizontal
    : winningVertical
    ? winningVertical
    : winningDiagonal
    ? winningDiagonal
    : null;
}
