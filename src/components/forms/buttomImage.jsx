import { useRef } from "react"
import { useTranslations } from "next-intl";


export default function ButtomImage ({ onFileSelect }) {
    const t = useTranslations('MakeCv')
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        onFileSelect(selectedFile);
      };

    return (
        <div>
            <button
            type="button"
                onClick={handleButtonClick}
                className="bg-cyan-600 text-white font-medium p-2 min-w-[150px] hover:bg-sky-500 rounded"

            >
                {t('form6.chooseFile')}
            </button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".jpg, .jpeg, .png" 
            />
        </div>
    )
}