const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');

questions.forEach(question => question.addEventListener('click', () => {
    if(!question.nextElementSibling.classList.contains('hidden')) {
        question.nextElementSibling.classList.add('hidden');
        question.classList.remove('highlight');
    }else {
        questions.forEach(question => {
            question.nextElementSibling.classList.add('hidden');
            question.classList.remove('highlight');
        });
        question.nextElementSibling.classList.remove('hidden');
        question.classList.add('highlight')
    }
}))