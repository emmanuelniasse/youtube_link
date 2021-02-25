
const input = document.querySelector('#input');
const video = document.querySelector('#video');
let link = '';

input.addEventListener('input', (e) => {
    changeLink(e.target.value);
    if(link){
        video.innerHTML = `<iframe width="893" height="502" src=${link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', 'embed/');
    // for remove '&t=530s' , I split at '&', there are now 2 arrays and I want the [0] one.
    link = embed.split('&')[0];
    console.log(link);
}
