const input = require('readline-sync');


//makeLine(size) function

//size = input.question("Enter the length of a line : ");
let shape = '';

function makeLine(size)
{
  let shape = '';
    for(let i = 0; i < size; i++)
        {
            shape = shape + "#";        
        }
        //console.log(shape);

        return shape;
}
console.log(makeLine(5));

makeSquare(size) function

function makeSquare(size)
{
    for(let i = 0; i < size; i++)
        {
            for(let j = 0; j < size; j++)
                {
                    shape = shape + "#";
                }
                console.log(shape);
                shape = "";
        }
}
makeSquare(size);

makeRectangle(width, height) function

width = input.question("Enter the width of line : ");
height = input.question("Enter heigth of lines : ");

function makeSquare(width, height)
{
    for(let i = 0; i < height; i++)
        {
            for(let j = 0; j < width; j++)
                {
                    shape = shape + "#";
                }
                console.log(shape);
                shape = '';
        }
}
makeSquare(width,height);

makeDownwardStairs(height) function

function makeDownwardStairs(height)
{
    for(let i = 1; i <= height; i++)
        {
            for(let j = 1; j <= i; j++)
                {
                    shape = shape + "#";
                }
                console.log(shape);
                shape = '';
        }
}
makeDownwardStairs(height);

makeSpaceLine(numSpaces, numChars) function

let numSpaces = input.question("Enter number of spaces : ");
let numChars = input.question("Enter number of characters : ");
let space = '';
let ShapeOfChar = '';

function makeSpaceLine(numSpaces,numChars)
{
  console.log("*********************************");
    for(let i = 0; i < numSpaces; i++)
        {
            space = space + "_";
        }

        for(let j =0; j < numChars; j++)
          {
            ShapeOfChar = ShapeOfChar + "#";
          }

        shape = space + ShapeOfChar + space;
        console.log(shape);
}

makeSpaceLine(numSpaces,numChars);


let rows = input.question("Enter number of rows : ");

for(let i = 0; i < rows; i++)
    {
      let shape = '';
        for(let j = rows; j > i; j--)
        {
            shape = shape + " ";
        }

        for(let k = 0; k <= i; k++)
        {                           
            shape = shape + "*";
        }

        for(let l = 1; l <= i; l++)
          {
            shape = shape + "*"; 
          }
        console.log(shape);
               
    }

makeDiamond(height) function

    for(let i = 0; i < rows; i++)
      {
        let shape = '';
          for(let j = rows; j > i; j--)
          {
              shape = shape + " ";
          }
  
          for(let k = 0; k <= i; k++)
          {                           
              shape = shape + "*";
          }
  
          for(let l = 1; l <= i; l++)
            {
              shape = shape + "*"; 
            }
          console.log(shape);
                 
      }

      //reverse

      for(let i = rows; i >= 0; i--)
        {
          let shape = '';
            for(let j = rows; j > i; j--)
            {
                shape = shape + " ";
            }
    
            for(let k = 0; k <= i; k++)
            {                           
                shape = shape + "*";
            }
    
            for(let l = 1; l <= i; l++)
              {
                shape = shape + "*"; 
              }
            console.log(shape);
                   
        }