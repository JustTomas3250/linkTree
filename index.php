<?php

$file = "visitors.txt";

$count = file_exists($file) ? (int)file_get_contents($file) : 0;

$count++;

file_put_contents($file, $count);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link tree</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script>
        function openWindow(url){
            window.open(url, '_blank').focus()
        }
    </script>

    <h1>Tomáš Martínek</h1>

    <nav>
        <a href="#socialMedia"><div class="navLeft">Social media</div></a>
        <a href="#projects"><div class="navRight">Projects</div></a>
    </nav>

    <h2 id="socialMedia">Social Media</h2>

    <div id="socialMediaSection">
        <div onclick='openWindow("https://www.instagram.com/nevimvymysletesineco/")'>
            <img src="Images/instagram.png">
            <div>
                <h3>Instagram</h3>
                <p>nevimvymysletesineco</p>
            </div>
        </div>
        <div onclick='openWindow("https://discord.com/users/694943397550620702")'>
            <img src="Images/discord.png">
            <div>
                <h3>Discord</h3>
                <p>prostetomass</p>
            </div>
        </div>
        <div onclick='openWindow("https://open.spotify.com/user/lygq5uqubge9qfgifj0ws28qi?si=69f119fe306c4923")'>
            <img src="Images/spotify.png">
            <div>
                <h3>Spotify</h3>
                <p>Tomáš</p>
            </div>
        </div>
        <div onclick='openWindow("https://www.tiktok.com/@nevimvymysletesineco?is_from_webapp=1&sender_device=pc")'>
            <img src="Images/tiktok.png">
            <div>
                <h3>TikTok</h3>
                <p>ProsteTomas</p>
            </div>
        </div>
        <div onclick='openWindow("https://www.youtube.com/@ProsteTomasss")'>
            <img src="Images/youtube.png">
            <div>
                <h3>Youtube</h3>
                <p>ProsteTomas</p>
            </div>
        </div>
        <div onclick='openWindow("https://prostetomas.itch.io")'>
            <img src="Images/itch.png">
            <div>
                <h3>Itch.io</h3>
                <p>ProsteTomas</p>
            </div>
        </div>
        <div onclick='openWindow("https://github.com/JustTomas3250")'>
            <img src="Images/github.png">
            <div>
                <h3>GitHub</h3>
                <p>JustTomas3250</p>
            </div>
        </div>
    </div>
    </div>

    <h2 id="projects">Projects</h2>

    <div id="projectsSection">
        <h3 class="year">2026</h3>

        <div onclick='openWindow("https://prostetomas.itch.io/slimy-parasite")'>
            <img src="Images/slimyParasite.png">
            <div>
                <h3>Slimy parasite</h3>
                <p>This game was created for Trijam #381, where you have 3 hours to make an entire game. The theme was “Parasite” and overall I placed 5th out of 25 submissions</p>
            </div>
        </div>

        <div onclick='openWindow("https://justtomas3250.github.io/enigmaUUR/")'>
            <img src="Images/enigma.png">
            <div>
                <h3>Enigma emulator</h3>
                <p>This project was created as a school project with the aim of making the Enigma machine accessible and easy to understand for everyone.</p>
            </div>
        </div>

        <hr>
        <h3 class="year">2025</h3>

        <div onclick='openWindow("https://prostetomas.itch.io/tnt-delivery")'>
            <img src="Images/tnt.png">
            <div>
                <h3>TNT delivery</h3>
                <p>This game was created for Mini Jame Gam #49. The theme was “Explode,” and the special object was “Box.”</p>
            </div>
        </div>

        <div onclick='openWindow("https://prostetomas.itch.io/simple-game-without-name")'>
            <img src="Images/sgwn.png">
            <div>
                <h3>Simple game without name</h3>
                <p>This game was created for the 60 Minutes Game Jam #3, where you have only 60 minutes to make an entire game. It didn't turn out quite well...</p>
            </div>
        </div>

        <div onclick='openWindow("https://prostetomas.itch.io/the-button")'>
            <img src="Images/theButton.png">
            <div>
                <h3>The button</h3>
                <p>This was my first-ever game jam. It was the ??? JAM #2 game jam, and the theme was ONE BUTTON. Overall, I placed 4th out of 15 submissions.</p>
            </div>
        </div>

        <div onclick='openWindow("projects/3D")'>
            <img src="Images/3D.png">
            <div>
                <h3>3D</h3>
                <p>This is a small project where I tried to create 3D graphics using plain JavaScript.</p>
            </div>
        </div>

        <hr>
        <h3 class="year">2024</h3>

        <div onclick='openWindow("https://prostetomas.itch.io/codeplayer")'>
            <img src="Images/codePlayer.png">
            <div>
                <h3>CodePlayer.html</h3>
                <p>A game where you program yourself and the environment to achieve victory. The entire game was developed in JavaScript.</p>
            </div>
        </div>

        <div onclick='openWindow("projects/SandSimulator")'>
            <img src="Images/sandSimulator.png">
            <div>
                <h3>Sand simulator</h3>
                <p>This is a small project where I tried to create sandbox (containing falling sand) using plain JavaScript.</p>
            </div>
        </div>

        <hr>
        <h3 class="year">2023</h3>

        <div onclick='openWindow("https://prostetomas.itch.io/flappybird")'>
            <img src="Images/flappyBird.png">
            <div>
                <h3>Skákací ptáček</h3>
                <p>My first game on itch.io and also my first game made in the Unity Engine. Just a simple Flappy Bird clone.</p>
            </div>
        </div>

        <hr>
        <h3 class="year">2022</h3>

        <div onclick='openWindow("https://justtomas3250.github.io/kalkulator/")'>
            <img src="Images/kalkulacka.png">
            <div>
                <h3>Kalkulator</h3>
                <p>My first-ever web app in any programming language. This project was made for school, where we had to create a working calculator.</p>
            </div>
        </div>

        <div onclick='openWindow("projects/rickandmorty")'>
            <img src="Images/rickandmorty.png">
            <div>
                <h3>Rick and Morty</h3>
                <p>My first-ever web in html. This project was made for school, where we had to create simple web page.</p>
            </div>
        </div>
    </div>
</body>
</html>