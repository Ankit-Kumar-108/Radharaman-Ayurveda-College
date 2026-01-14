'use client'

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure worker to use the specific version 4.4.168 (compatible with react-pdf 9.1.1)
if (typeof window !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;
}

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