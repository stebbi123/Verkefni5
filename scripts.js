var getQuestion = document.getElementById("questions");

function questions(question, answers, rightAnswer){
	this.question = question;
	this.answers = answers;
	this.rightAnswer = rightAnswer;
	this.template = function(){

        let first = '<div class="question">' +
                    "<h2>Question: "+ this.question + "</h2>"        
        let ans = "<h3>" + "Answers" + "</h3>";
        ans += "<ul>";
        for(let i=0;i<this.answers.length;i++) {
            ans +=  "<li>" + this.answers[i] + "</li>";
        }
        ans += "</ul>";

        let last = "</div>";

    return first + ans + last;
    }
}

var quest = [];

quest.push(new questions("hello",['hi','sup','asd','sad'],'hi'));
quest.push(new questions('bye',['goodbye','cya'],'cya'));


let container = "";
for (let i = 0; i < quest.length; i++){
        container += quest[i].template();
}

getQuestion.innerHTML = container;