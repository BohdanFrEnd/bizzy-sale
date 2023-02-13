// Faq
let quest = document.querySelectorAll('.faq__item-question');
let questionAnswer, arrowQuest;

for(let i = 0;i < quest.length; i++){
    quest[i].addEventListener('click', function(){
        this.classList.toggle('faq__item-question_active');

        questionAnswer = this.nextElementSibling;
        arrowQuest = this.childNodes[3];
        
        arrowQuest.classList.toggle('faq__question-icon_active');
        questionAnswer.classList.toggle('faq__item-answer_active');
        
    })
}
        