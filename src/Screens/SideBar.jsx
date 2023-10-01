import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { ChangeActiveCatIndex } from "../redux/action";

function SideBar({ show = false, setOpenSideBase }) {
  const Data = useSelector((state) => state.data) || [];
  const dispatch = useDispatch();
  const currentCatIndex = useSelector((state) => state.currentCatIndex)|| 0;
  const handleToggle = () =>setOpenSideBase((w)=>!w)
  return (
    <>
      <Offcanvas show={show} onHide={handleToggle}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Choose By Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup as="ol" numbered>
            {Data?.map((item, index) => (
              <ListGroup.Item
              key={index}
              onClick={()=>{
                // item.category_image
                handleToggle()
                dispatch(ChangeActiveCatIndex(index))
              }}
              active={index == currentCatIndex}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <img src={"https://adminmurugan.ashifsadiq.in/CatImage/"+item.category_image} width={60} style={{
                    borderRadius:50
                  }} /><div className="fw-bold">{item.category_eng_name}</div>
                  {item.category_tam_name}
                </div>
                <Badge bg="primary" pill>
                  {item?.products?.length}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
