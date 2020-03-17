let query = window.location.search;
alert(query)
query.toString()
let id = query.slice(4);
console.log(id);


const singleChar = $.ajax({
    url: `https://rickandmortyapi.com/api/character/`+ id,
    method: "GET"
});

singleChar.done(function(){
    let data = JSON.parse(singleChar.responseText);

    console.log(data);
})