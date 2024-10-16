document.addEventListener("DOMContentLoaded", function () {
    const cursorImage = document.getElementById("cursor-image");
    const archivesContents = document.querySelectorAll(".archives-content");

    archivesContents.forEach(content => {
        content.addEventListener("mouseenter", function(event) {
            cursorImage.style.display = "block"; // 이미지 표시
            document.body.style.cursor = "none"; // 기본 커서 숨김
        });

        content.addEventListener("mousemove", function(event) {
            cursorImage.style.left = `${event.pageX}px`; // 커서의 X 좌표
            cursorImage.style.top = `${event.pageY}px`; // 커서의 Y 좌표
        });

        content.addEventListener("mouseleave", function() {
            cursorImage.style.display = "none"; // 이미지 숨김
            document.body.style.cursor = "default"; // 기본 커서로 복원
        });
    });
});
