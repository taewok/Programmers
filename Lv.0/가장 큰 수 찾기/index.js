// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.

// 입출력 예
// array	result
// [1, 8, 3]	[8, 1]
// [9, 10, 11, 8]	[11, 2]

// 입출력 예 설명
// 입출력 예 #1
// 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
// 입출력 예 #2
// 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

function solution(array) {
  var answer = [];

  // slice를 사용해 원본 배열은 보존
  // sort를 사용해 오름차순으로 정렬
  // 배열의 마지막 index로 가장 큰 수 반환
  const maxNumber = array.slice().sort((a, b) => a - b)[array.length - 1];
  answer.push(maxNumber);

  // indexOf를 사용해 특정 값이 몇번 index에 있는 찾기
  answer.push(array.indexOf(maxNumber));
  return answer;
}

console.log(solution([9, 10, 11, 8]));
