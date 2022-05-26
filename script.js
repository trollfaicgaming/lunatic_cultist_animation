// written by chapel1337
// gave up on 2/26/2022, too strenuous of a project
// motivation somewhat lost the day before writing this
// most likely the _ burning out

function start() {

    let functions = {

        buttonPressed() {
            document.getElementById("button").style.opacity = 0;
            document.getElementById("button").onclick = null;

            document.getElementById("lunatic_cultist").style.opacity = 100;
        },

        playAudio(audio, loop) {
            audio = new Audio(audio);
            if (loop) {
                audio.loop;
            }
            audio.play();
        },

        changeImage(id, img) {
            document.getElementById(id).src = img;
        },

        changeOpacity(id, amount) {
            document.getElementById(id).style.opacity = amount + "%"
        },
    }

    button.addEventListener("click", functions.buttonPressed())

    functions.playAudio("media/audio/cultist2.mp3");
    functions.playAudio("media/audio/theme.mp3", true);

    functions.changeImage("lunatic_cultist", "media/images/lunatic_cultist_floating.gif");

    // start rising animation

    document.getElementById("lunatic_cultist").animate([
        { bottom: 40 + "%" },
      ], {
        duration: 3000,
        fill: "forwards",
      });

    // end rising animation

    // start fireball animation

    document.getElementById("fireball1").style.opacity = 100
    document.getElementById("fireball1").animate([
        { right: 50 + "%"},
    ], {
        duration: 2500,
        fill: "forwards",
        delay: 3000,
    });
      

      return console.log("done");
}