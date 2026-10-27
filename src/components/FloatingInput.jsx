// Underlined input whose label floats above it on focus or once filled
export default function FloatingInput({ name, label, type = 'text', required = true }) {
    return (
        <div className="relative z-0 w-full group">
            <input
                type={type}
                name={name}
                id={name}
                placeholder=" "
                required={required}
                className="block py-4 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-brand-offwhite/20 appearance-none focus:outline-none focus:ring-0 focus:border-brand-light-blue peer interactive"
            />
            <label htmlFor={name} className="absolute text-brand-offwhite/50 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {label}
            </label>
        </div>
    );
}
