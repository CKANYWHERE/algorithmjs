
function solution(animals, seats){
    const array = [];
    let time = 0;
    for (const animal of animals) {
        if (array.length < seats) {
            if(array.includes(animal)){
                time += 1;
                array.splice(array.indexOf(animal), 1)
                array.push(animal);
            } else {
                time += 60;
                array.push(animal);
            }
        } else {
            if(array.includes(animal)){
                time += 1;
                array.splice(array.indexOf(animal), 1)
                array.push(animal);
            }else{
                time += 60;
                array.shift();
                array.push(animal);
            }
        }
    }
    return `${Math.floor(time/60)}분 ${time%60}초`
}

const answer = solution(['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류'], 3);
console.log(answer)
/*
* 1 척추동물
* 2 척추동물, 어류
* 3 어류, 척추동물
* 4 어류, 척추동물, 무척추동물
* 5 척추동물, 무척추동물, 파충류
* 6 무척추동물, 파충류, 척추동물
* 7 파충류, 척추동물, 어류
* 8 척추동물, 어류, 파충류
* */