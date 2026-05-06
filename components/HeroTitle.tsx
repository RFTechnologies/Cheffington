import React from 'react';

interface HeroTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    textAlign?: 'left' | 'center' | 'right';
    marginBottom?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
    children,
    subtitle = "You may edit and/or add details below.",
    textAlign = "center",
    marginBottom = "mb-12",
    titleClassName = "",
    subtitleClassName = ""
}) => {
    return (
        <div className={`${marginBottom} text-${textAlign}`}>
            <h1 className={`title mb-2 ${titleClassName}`}>
                {children}
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