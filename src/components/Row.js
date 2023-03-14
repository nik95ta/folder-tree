import { FaFileAlt, FaFolder } from "react-icons/fa";
import { FcFolder, FcFile, FcEmptyTrash } from "react-icons/fc";
import { deleteItem, newFile, newFolder, toggleExpand } from "../constants/menuActions";
const Row = ({ type, name, handleAction }) => (
            <div className="row">
                {type === "folder" ?
                    <FaFolder className="clickable" onClick={() => handleAction(toggleExpand)} /> :
                    <FaFileAlt className="clickable" />
                }
                <h5 className="name">{name}</h5>
                {type === "folder" && <FcFile className="action-icon clickable" onClick={() => handleAction(newFile)} />}
                {type === "folder" && <FcFolder className="action-icon clickable" onClick={() => handleAction(newFolder)} />}
                <FcEmptyTrash className="action-icon clickable" onClick={() => handleAction(deleteItem)} />
            </div>
    )
export default Row;
