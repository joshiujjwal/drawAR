const openDatabaseAsset = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open("myDatabase", 1);
  
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
  
      request.onupgradeneeded = () => {
        request.result.createObjectStore("files");
      };
    });
  };

  export default openDatabaseAsset;