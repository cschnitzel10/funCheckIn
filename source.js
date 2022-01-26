/* Use the following variable to specify the number of random phrases
PLEASE UPDATE NUMBER AFTER ADDING DELETING PHRASES */
const numberOfPhrases = 28

const phrases = new buildArray(numberOfPhrases)

// Add random questions here please

phrases[1] = " “You are abducted by aliens. They only keep alive what seems valuable for them. How would you survive?” "
phrases[2] = " “What was the first way you made money” "
phrases[3] = " “What Band defined your teenage youth” "
phrases[4] = " “What is the worst thing you have done for love?” "
phrases[5] = " “What is a weird fun fact about you?” "
phrases[6] = " “You are a criminal mastermind. What murder weapon is the perfect one and why?” "
phrases[7] = " “What reality show would you want to be on? Please elaborate” "
phrases[8] = " “Pick a band to play at your funeral and tell us why” "
phrases[9] = " “Tell us about your experience with a drug other than alcohol (ps: love is not a drug you mormon).” "
phrases[10] = " “You have a personal butler. 24/7 service. What is your most requested order?” "
phrases[11] = " “How do you give back to community? If you don't, what could be your way of giving back to the community?” "
phrases[12] = " “Do you have a scar? If yes, tell the story. If no, what scar should you have based on a story.” "
phrases[13] = " “Is there life after death? Why so?” "
phrases[14] = " “Of whom in the office/company are you most afraid of?” "
phrases[15] = " “On what item do you spend an unreasonable amount of money?” "
phrases[16] = " “What is your new years resolution?” "
phrases[17] = " “You are invited to a swinger party. Do you go?” "
phrases[18] = " “You are invited to celebrate KARNEVAL in the most wonderful city of cologne. What is your costume?” "
phrases[19] = " “You are at KARNEVAL in Cologne. You have to smuggle drinks into clubs. How do you smuggle them and what drinks will you smuggle?” "
phrases[20] = " “If you could resign from work right now and don't have to worry about money. What would you do in the next month?” "
phrases[21] = " “What is the oldest clothing item you own? Is there a story?” "
phrases[22] = " “JOKER! Name one team member right now who has to tell their most loved fashion trend.” "
phrases[23] = " “Do you party late? How often? Where do you usually go?” "
phrases[24] = " “What do you do the whole day when you don’t have work? Walk us through.” "
phrases[25] = " “What is your biggest happiness factor right now?” "
phrases[26] = " “Share an embarrassing moment from the last six months” "
phrases[27] = " “Is there a God (not Jesus, God)? Why do you think so?” "
phrases[28] = " “The year is 2022. Corona does not exist. What are your plans for the weekend?” "


function buildArray(size){
this.length = size
for (let i = 1; i <= size; i++){
this[i] = null}
return this
}

function pickRandomPhrase(frm) {
const rnd = Math.ceil(Math.random() * numberOfPhrases)

frm.PhraseBox.value = phrases[rnd]
}
