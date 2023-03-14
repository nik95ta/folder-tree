const initialData = {
    name: "root",
    isFolder: true,
    id: 1,
    items: [
        {
            name: "Public",
            isFolder: true,
            id: 2,
            items: [
                {
                    name: "favicon.ico",
                    isFolder: false,
                    id: 3,
                },
                {
                    name: "index.html",
                    isFolder: false,
                    id: 4,
                },
                {
                    name: "manifest.json",
                    isFolder: false,
                    id: 5,
                },
                {
                    name: "robots.txt",
                    isFolder: false,
                    id: 6,
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            id: 7,
            items: [
                {
                    name: "components",
                    isFolder: true,
                    id: 8,
                    items:[
                        {
                            name: "FolderTree.js",
                            isFolder: false,
                            id: 9,
                        },
                        {
                            name: "Row.js",
                            isFolder: false,
                            id: 10,
                        }
                    ]
                },
                {
                    name: "constants",
                    isFolder: true,
                    id: 11,
                    items:[
                        {
                            name: "directoryTypes.js",
                            isFolder: false,
                            id: 12,
                        },
                        {
                            name: "menuActions.js",
                            isFolder: false,
                            id: 13,
                        }
                    ]
                },
                {
                    name: "data",
                    isFolder: true,
                    id: 14,
                    items:[
                        {
                            name: "initialData.js",
                            isFolder: false,
                            id: 15,
                        },
                        {
                            name: "modalConfigs.js",
                            isFolder: false,
                            id: 16,
                        }
                    ]
                },
                {
                    name: "utils",
                    isFolder: true,
                    id: 17,
                    items:[
                        {
                            name: "cloneDeep.js",
                            isFolder: false,
                            id: 18,
                        },
                        {
                            name: "generateFile.js",
                            isFolder: false,
                            id: 19,
                        },
                        {
                            name: "generateFolder.js",
                            isFolder: false,
                            id: 20,
                        },
                        {
                            name: "manageItem.js",
                            isFolder: false,
                            id: 21,
                        },
                        {
                            name: "sortDirectory.js",
                            isFolder: false,
                            id: 22,
                        },
                        {
                            name: "uniqueId.js",
                            isFolder: false,
                            id: 23,
                        }
                    ]
                },
                {
                    name: "App.js",
                    isFolder: false,
                    id: 24,
                },
                {
                    name: "index.css",
                    isFolder: false,
                    id: 25,
                },
                {
                    name: "index.js",
                    isFolder: false,
                    id: 26,
                }
            ]
        },
        {
            name: "package.json",
            isFolder: false,
            id: 27,
        },
        {
            name: "package-lock.json",
            isFolder: false,
            id: 28,
        },
        {
            name: "README.md",
            isFolder: false,
            id: 29,
        },
    ]
};
export default initialData;
