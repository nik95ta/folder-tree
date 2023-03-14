import { useState } from "react";
import Row from "./Row";
import { folder, file } from "../constants/directoryTypes";
import { deleteItem, newFile, newFolder, toggleExpand } from "../constants/menuActions";
import { handleAddFile, handleAddFolder, handleDelete } from "../utils/manageItem";
import { modalNewFolderConfig, modalNewFileConfig, modalDeleteConfig } from '../data/modalConfigs';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const FolderTree = ({ currentDirectory, parentDirectory = null }) => {
    const [expanded, setExpanded] = useState(true);
    const [parent, setParent] = useState(parentDirectory);
    const current = parent ? parent.items.find(item => item.id === currentDirectory.id) : currentDirectory;

    const handleAction = async (action) => {
        switch (action) {
            case newFile:
                const { value: fileName } = await MySwal.fire(modalNewFileConfig);
                if (fileName) setParent(handleAddFolder(parent, current, fileName));
                break
            case newFolder:
                const { value: folderName } = await MySwal.fire(modalNewFolderConfig);
                if (folderName) setParent(handleAddFile(parent, current, folderName));
                break
            case deleteItem:
                const { isConfirmed } = await MySwal.fire(modalDeleteConfig);
                if (isConfirmed) setParent(handleDelete(parent, current));
                break
            case toggleExpand:
                setExpanded(!expanded);
                break
        }
    };

    if (!current) {
        return null;
    }
    if (current.isFolder) {
        return (
            <div className="list-item">
                <Row type={folder} name={current.name} handleAction={handleAction} />
                <div style={{display: expanded ? 'block' : 'none'}}>
                    {current.items.map(item =>
                        <FolderTree key={item.id} currentDirectory={item} parentDirectory={current} />
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="list-item">
                <Row type={file} name={current.name} handleAction={handleAction} />
            </div>
        )
    }
}

export default FolderTree;
