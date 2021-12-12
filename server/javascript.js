// Täällä voisi olla koodia

module.exports = {
    // Funktiot luodaan tällä tyylillä
    hienoKoodi: function (req){
        min = Math.ceil(0);
        max = Math.floor(1000);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
}