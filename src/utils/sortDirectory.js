
const sortBy = (field) => {
    return function (a, b) {
        return a[field].localeCompare(b[field]);
    }
};
const sortDirectory = (directory) => {
    const files = [];
    const subDirectories = [];
    for (const item of directory) {
        if (item.isFolder) {
            subDirectories.push(item);
        } else {
            files.push(item);
        }
    }
    subDirectories.sort(sortBy('name'));
    files.sort(sortBy('name'));
    return subDirectories.concat(files);
};
export default sortDirectory;
