document.getElementById('heliotrope').onclick = partyHeliotrope
document.getElementById('solstice').onclick = partySolstice
document.getElementById('spellbound').onclick = partySpellbound
document.getElementById('pineGrove').onclick = partyPineGrove
document.getElementById('jacaranda').onclick = partyJacaranda
document.getElementById('grape').onclick = partyGrape
document.getElementById('reset').onclick = resetWallpaper

function partyHeliotrope() {
    document.querySelector('img').style.backgroundColor = 'rgba(165, 124, 142, 1)'
}
function partySolstice() {
    document.querySelector('img').style.backgroundColor = 'rgba(90, 45, 68, 1)'
}
function partySpellbound() {
    document.querySelector('img').style.backgroundColor = 'rgba(6, 33, 52, 1)'
}
function partyPineGrove() {
    document.querySelector('img').style.backgroundColor = 'rgba(15, 50, 44, 1)'
}
function partyJacaranda() {
    document.querySelector('img').style.backgroundColor = 'rgba(120, 101, 123, 1)'
}
function partyGrape() {
    document.querySelector('img').style.backgroundColor = 'rgba(13, 9, 54, 1)'
}
function resetWallpaper() {
    document.querySelector('img').style.backgroundColor = 'rgba(255, 255, 255, 1)'
}