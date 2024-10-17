/* project */
// 프로젝트 카드 설명을 처리하는 함수
function projectShowDescription(imgElement) {
    const description = imgElement.closest('.project_card').querySelector('.project_description');
    description.style.display = 'block'; // 설명 창 보이기
    setTimeout(() => {
        description.style.bottom = '0'; // 아래에서 올라오는 애니메이션
        description.style.opacity = '1'; // 부드럽게 나타나도록 설정
    }, 10);
}

function projectHideDescription(imgElement) {
    const description = imgElement.closest('.project_card').querySelector('.project_description');
    description.style.bottom = '-40px'; // 아래로 내려가기
    description.style.opacity = '0'; // 부드럽게 사라지도록 설정
    setTimeout(() => {
        description.style.display = 'none'; // 숨김
    }, 300); // 애니메이션 시간과 동일하게 설정
}

