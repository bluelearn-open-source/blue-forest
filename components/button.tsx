// a blue button that takes onPressed and title
export const Button = ({onPressed,title,active})=>{
    return <button onClick={onPressed} className={`${active?'bg-blue-600':'bg-indigo-50'} p-2  px-3 rounded-full text-indigo-50 `}>
        <p className={`h-full text-lg tracking-wider ${!active?'text-blue-600':'text-indigo-50'} font-Mulish`}>{title}</p></button>
  }