function onRightjs() {
    var rocket = document.getElementById('rocketship');
    var position = 0;
    document.getElementById('button').style.color = 'black';

    alert(rocket);

    while (position < 200) {
        position++;

        rocket.style.left = position;
    }
}