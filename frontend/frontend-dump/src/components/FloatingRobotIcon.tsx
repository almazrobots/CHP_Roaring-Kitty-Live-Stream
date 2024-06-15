import React from 'react';
import './FloatingRobotIcon.css'; // импорт CSS для стилей компонента

const FloatingRobotIcon: React.FC = () => {
	const handleClick = () => {
		window.open('http://www.df6.webtm.ru/chat/g2Oh8I6cYkJPAdLA', '_blank', 'noopener,noreferrer');
	};


	return (
		<div className="floating-robot-container" onClick={handleClick}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRxH2XPvAOK9kViwc4_T3QlBvNrLqT97p7g&s"
				alt="Floating Robot"
				className="floating-robot"
			/>
		</div>
	);
};

export default FloatingRobotIcon;
