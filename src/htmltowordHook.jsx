import React from 'react';
import { useExportToDoc } from 'html-to-doc-react'; //import useExportToDoc

const HTMLToWordHook = () => {
    
    // pass (htmlContent, elementId, fileName) to useExportToDoc
    // Either pass htmlContent or elementId , htmlContent is entire HTML whereas elementId is id of an HTML element from which content will be extracted
    // Pass fileName with .doc extension or Export.doc is default fileName

    const exportToDoc = useExportToDoc('<p>Hello, World!</p>', null, 'example.doc'); 
    return (
        <div>
            <button onClick={exportToDoc}>Export to Word</button>
        </div>
    );
};

export default HTMLToWordHook;