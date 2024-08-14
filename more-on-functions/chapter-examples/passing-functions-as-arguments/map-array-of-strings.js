let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function(str)
{
    for(let i = 0; i < str.length; i++)
        {
            return str.charAt(i);
        }
});

console.log(firstInitials);
