
import React from 'react';

interface HeroTitleProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    marginBottom?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    className?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
    title,
    subtitle = "You may edit and/or add details below.",
    textAlign = "center",
    marginBottom = "mb-12",
    titleClassName = "",
    subtitleClassName = "",
    className = ""
}) => {
    return (
        <div className={`${marginBottom} text-${textAlign} ${className}`}>
            <h1 className={`title mb-4 ${titleClassName}`}>
                {title}
            </h1>
            {subtitle && (
                <p className={`subtitle ${subtitleClassName}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default HeroTitle;