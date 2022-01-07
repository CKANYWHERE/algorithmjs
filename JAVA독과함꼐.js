
function solution (rock, dogs){
    const answer = [];
    for (const dog of dogs) {
        let curJump = 0;
        let good = true;
        while(rock.length > curJump){
            curJump += Number(dog['점프력']);
            rock[curJump-1] -= Number(dog['몸무게']);
            if(rock[curJump-1] < 0) {
                good = false;
                break;
            }
        }
        if(good) {
            answer.push(dog['이름'])
        }
    }
    return answer;
}


const answer = solution([1, 2, 1, 4],[{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
},{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
},{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
},{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
},
])
console.log(answer)