// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

function solution(arr1, arr2) {
  var answer = [];

  // arr1의 길이 만큼 반복
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];

    // arr1의 i의 순번 배열의 길이 만큼 반복
    for (let k = 0; k < arr1[i].length; k++) {
      sum.push(arr1[i][k] + arr2[i][k]);
    }

    // 배열 arr1[i] arr2[i]에 k순번 수끼리 더한 값을 하나의 배열로 묶어 answer배열의 push
    answer.push(sum);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
