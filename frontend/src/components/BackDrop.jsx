const BackDrop = ({ show, eventSide }) => {
    return show && <div className="fixed top-0 left-0 z-40 w-full h-full bg-gray-600 opacity-50 lg:hidden" onClick={eventSide}></div>
}

export default BackDrop