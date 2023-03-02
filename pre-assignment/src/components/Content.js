const Content = ({ page, authenticated }) => {
    return (
        <p className="active" style={{ flex: "4", textAlign: "center", margin: "auto", fontSize: "40px" }}>
            {!page ? "" : !authenticated ? "You should login first!" : `This is Page ${page}!`}
        </p>
    );
};

export default Content;
