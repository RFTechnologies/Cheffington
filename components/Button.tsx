"use client";

import Link from "next/link";

type ButtonProps = {
    title: string;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    disabled?: boolean;
    className?: string;
};

export default function Button({
    title,
    href,
    onClick,
    type = "button",
    loading = false,
    disabled = false,
    className = "",
}: ButtonProps) {
    const isDisabled = disabled || loading;
    const classes = `button button-primary ${className}`;
    const content = loading ? "Loading..." : title;


    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                onClick={(e) => {
                    if (isDisabled) e.preventDefault();
                }}
                aria-disabled={isDisabled}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={classes}
        >
            {content}
        </button>
    );
}