import React, { useState, useEffect } from "react";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치를 확인하여 isVisible 상태를 업데이트
      const isTop = window.pageYOffset === 0;
      setIsVisible(!isTop);
    };

    // 스크롤 이벤트 리스너를 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // 맨 위로 스크롤하는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`TopButton ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default TopButton;
