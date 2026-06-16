const Button = ({ children, type = 'button', className = '', onClick, disabled = false, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#111] shadow-[0_18px_32px_-24px_rgba(212,184,111,0.95)] cursor-pointer transition duration-200 ease-out hover:bg-hero-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-3 md:text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
