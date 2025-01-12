// filepath: /c:/Users/STPC/Desktop/react to word/react-app-word/src/CreateHeading.jsx
import htmlToDocx from 'html-to-docx';
import { saveAs } from 'file-saver';

export const convertHtmlToWord = async (htmlString) => {
    try {
        const blob = await htmlToDocx(htmlString, {
            orientation: 'portrait',
            margins: { top: 720, right: 720, bottom: 720, left: 720 },
        });
        saveAs(blob, 'document.docx');
        console.log('Document created successfully');
    } catch (error) {
        console.error('Error creating document:', error);
    }
};