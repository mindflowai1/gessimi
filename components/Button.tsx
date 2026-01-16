import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-out rounded-sm group";

  const variants = {
    primary: "bg-gradient-to-r from-gold-butterfly to-soft-rose text-white hover:from-soft-rose hover:to-gold-butterfly shadow-lg hover:shadow-2xl hover:-translate-y-1",
    outline: "bg-transparent border-2 border-taupe text-warm-grey hover:border-gold-butterfly hover:text-gold-butterfly hover:bg-gold-butterfly/5",
    text: "bg-transparent text-warm-grey border-b-2 border-soft-rose/50 hover:border-gold-butterfly px-0 py-2 rounded-none hover:text-gold-butterfly tracking-widest"
  };

  const widthClass = fullWidth ? "w-full" : "";

  // Shimmer effect element for primary buttons
  const shimmer = variant === 'primary' ? (
    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
  ) : null;

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {shimmer}
        <span className="relative z-20">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {shimmer}
      <span className="relative z-20">{children}</span>
    </button>
  );
};

export default Button;