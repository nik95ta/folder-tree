import uniqueId from "./uniqueId";
const generateFile = (fileName) => {
    return {
        name: fileName,
        isFolder: false,
        id: uniqueId(),
    }
};
export default generateFile;
