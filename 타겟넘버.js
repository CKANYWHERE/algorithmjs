function solution(numbers, target) {
    var answer = 0;

    dfs(0,0)

    function dfs(idx, value) {
        if(numbers.length === idx) {

            if(value === target){
                answer = answer + 1;
            }

            return;
        }

        dfs(idx + 1, value - numbers[idx])
        dfs(idx + 1, value + numbers[idx])
    }

    return answer;
}

const answer = solution([1, 1, 1, 1, 1],3)
console.log(answer)