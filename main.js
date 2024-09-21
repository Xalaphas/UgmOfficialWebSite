function changeText() {
    const text = document.getElementById('myText');

    if (text.innerHTML == "Somos uma equipe de desenvolvedores de jogos Indie") {
        text.innerHTML = "SOCORROOOOOO ALGUÈM ME AJUDAA NÂO AGUENTO MAIS FAZER PROGRAMAAAAAAAA";
    } else {
        text.innerHTML = "Somos uma equipe de desenvolvedores de jogos Indie";
    }
}
