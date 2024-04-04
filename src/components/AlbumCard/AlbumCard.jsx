import "./AlbumCard.css";

fetch("nest-music/db.json")
    .then(data => {
        // Handle the JSON data
        console.log(data);
    });

function AlbumCard(album_name, url) {
    return(
        <div class='AlbumCard'> 
            <img src={url} alt="Album" />
            <h2> {album_name} </h2>
        </div>
    );
}

export default AlbumCard