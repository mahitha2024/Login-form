
import React, { useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    const sasToken =  'sv=2022-11-02&ss=bfqt&srt=c&sp=rwdlacupiytfx&se=2024-03-26T13:20:01Z&st=2024-03-26T05:20:01Z&spr=https&sig=GR7CUc1RK7D6%2BRzpFjwzxW%2B9NxZynDSemDuNK%2B5Q99I%sv=2022-11-02&ss=bfqt&srt=sco&sp=rwlacuptfx&se=2024-03-27T14:22:56Z&st=2024-03-26T06:22:56Z&spr=https,http&sig=5QNpdmHO3ziBH4ddAlkLLmku9IqnuBac2oEsyQmvztE%3D'; // Replace with your actual SAS token
    const containerName = 'aitorchreact'; // Your container name
    const storageAccountName = 'aitreact'; // Your storage account name

    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
      {
        loggingOptions: {
          shouldLog: (_level, _component, _context, _details) => true,
          logger: (_level, message) => console.log(message),
        },
      }
    );

    const containerClient = blobService.getContainerClient(containerName);
    const blobName = selectedFile.name;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
      await blockBlobClient.uploadBrowserData(selectedFile);
      setUploadSuccess(true); // Set upload success state to true
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <div>
<input type="file" onChange={handleFileChange} multiple />
      <button onClick={uploadFile}>Upload</button>
      {uploadSuccess && <p>File uploaded successfully!</p>}
    </div>
  );
};

export default FileUploader;
