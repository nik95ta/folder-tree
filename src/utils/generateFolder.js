import uniqueId from "./uniqueId";
const generateFolder = (directoryName) => {
    return {
        name: directoryName,
        isFolder: true,
        id: uniqueId(),
        items: [],
    }
};
export default generateFolder;
