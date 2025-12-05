const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Size variants
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Color variants
  const variantStyles = {
    primary:
      "bg-linear-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-purple-500",
    secondary:
      "bg-base-200/50 text-base-content border border-base-300/50 hover:bg-base-300/50 active:scale-95 focus:ring-base-400",
    outline:
      "border-2 border-purple-500 text-purple-500 hover:bg-purple-50/10 active:scale-95 focus:ring-purple-500",
    danger:
      "bg-red-500 text-white hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-red-500",
    success:
      "bg-green-500 text-white hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-green-500",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${widthStyle}
    ${className} cursor-pointer
  `.trim();

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
