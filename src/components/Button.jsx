export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-lg font-medium transition-all";

    const variants = {
        primary:
            "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg",
        outline:
            "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
