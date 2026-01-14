'use client'

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// CHECK THIS LINE CAREFULLY:
// It must say '3.11.174' (NOT 'pdfjs.version' or any other number)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

export default function PdfThumbnail({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-full w-full overflow-hidden flex justify-center items-center bg-gray-100 pointer-events-none">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-xs text-gray-400">Loading...</div>}
        error={<div className="text-xs text-red-400">PDF Error</div>}
        className="flex justify-center items-center"
      >
        <Page 
          pageNumber={1} 
          width={300} 
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
        />
      </Document>
    </div>
  );
}