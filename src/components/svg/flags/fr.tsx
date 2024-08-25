interface FrenchFlagProps {
    width: number;
    height: number;
}

export default function FrenchFlag({ width, height}: FrenchFlagProps) {
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 36 36" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
            <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z">
            </path><path fill="#EEE" d="M12 5h12v26H12z"></path>
        </svg>
    )
}