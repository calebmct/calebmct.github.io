var charadesPrompts = [
    "Hit the button again",
    "Motor Boating",
    "Putting on a condom",
    "A vibrator running out of batteries",
    "A queef",
    "When the finger goes in your butt",
    "A woodpecker pecking a tree",
    "Chewbacca's yell",
    "A squirrel gathering nuts",
    "Lifting up Simba over Pride Rock",
    "When it triggers the gag reflex",
    "Drinking out of a cup without using your hands or a straw",
    "Sucking on a straw when it gets blocked",
    "Unsuccessfully learning to whistle",
    "When you take off your bra at the end of the day",
    "Sucking/licking and/or biting a nipple",
    "Kneading dough",
    "Bobbing for apples",
    "Beastie Boys (words allowed)",
    "Smelling your armpits for freshness",
    "Playing that game where you have to pass an orange held under your chin to another person without using hands",
    "Petting a cat",
    "Working out with shake weights",
    "Licking the plate"
];
var dataIndex = 0;
function getCharadesPrompt() {
    dataIndex = dataIndex+1;
    var returned = charadesPrompts[dataIndex];
    console.log(dataIndex);
    if (dataIndex > 23) {
        document.getElementById("cPrompt").innerHTML = "ALL DONE! REFRESH TO START OVER"
    } else {
        document.getElementById("cPrompt").innerHTML = returned;
    }
};