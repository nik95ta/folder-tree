import cloneDeep from "./cloneDeep";
import sortDirectory from "./sortDirectory";
import generateFile from "./generateFile";
import generateFolder from "./generateFolder";

export const handleDelete = (parentDirectory, currentItem) => {
    return { ...parentDirectory, items: parentDirectory.items.filter(item => item.id !== currentItem.id )};
};

export const handleAddFile = (parentDirectory, currentDirectory, name) => {
    const newParent = handleAdd(parentDirectory, currentDirectory, generateFile(name));
    return newParent;
};

export const handleAddFolder = (parentDirectory, currentDirectory, name) => {
    const newParent = handleAdd(parentDirectory, currentDirectory, generateFolder(name));
    return newParent;
};
const handleAdd = (parentDirectory, currentDirectory, newItem) => {
    const currentIndex = parentDirectory.items.findIndex(item => item.id === currentDirectory.id);
    const parentItems = cloneDeep(parentDirectory.items);
    parentItems[currentIndex] = { ...currentDirectory, items: sortDirectory(currentDirectory.items.concat(newItem))};
    return { ...parentDirectory, items: parentItems};
};
