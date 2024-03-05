

import React from 'react';
import { useTranslations } from 'next-intl';

const Dialog = ({ isOpen, onClose, message }) => {
  const t = useTranslations('MakeCv')
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center m-6">
          <div className="bg-gray-800 bg-opacity-50 fixed inset-0 "></div>
          <div className={`bg-white p-8 rounded shadow-lg z-50 `}>
            <p className="text-lg font-semibold mb-4">{t('dialog.new')} {t('dialog.msgTitle')}</p>
            <p className="text-gray-700 mb-4">
            {t('dialog.msg')}
            </p>
            <div className='flex justify-end'>
                <button
                onClick={onClose}
                className="w-20 bg-cyan-600 rounded-md p-1 font-medium self-end hover:bg-sky-500"
                >
                {t('dialog.close')}
                </button>
                
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;