const questions = document.querySelectorAll('.question');
    const progress = document.querySelector('.progress');
    let currentIndex = 0;
    const answers = {};

    function showQuestion(index){
        questions.forEach(q => q.classList.remove('active'));
        questions[index].classList.add('active');
        progress.style.width = `${((index)/questions.length)*100}%`;
    }

    // Next buttons
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', ()=>{
            const parent = btn.parentElement;
            const input = parent.querySelector('input');
            if(input && input.value !== ''){
                answers[input.id || 'input'+currentIndex] = input.value;
                currentIndex++;
                if(currentIndex < questions.length) showQuestion(currentIndex);
                else showResult();
            } else if(!input){
                currentIndex++;
                if(currentIndex < questions.length) showQuestion(currentIndex);
                else showResult();
            } else {
                alert('من فضلك املأ الحقل');
            }
        });
    });

    // Option buttons
    document.querySelectorAll('.options button').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const parent = btn.closest('.question');
            answers[parent.dataset.index] = btn.dataset.value;
            currentIndex++;
            if(currentIndex < questions.length) showQuestion(currentIndex);
            else showResult();
        });
    });

    function showResult(){
        document.getElementById('questions').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        progress.style.width = `100%`;
        console.log('User Answers:', answers); // كل الإجابات محفوظة هنا
    }