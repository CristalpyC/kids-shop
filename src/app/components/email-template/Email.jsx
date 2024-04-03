const style = {
    backgroundColor: "pink",
    padding: "15px",
    textAlign: "center"
}

const styleImg = {
    width: "15rem",
    borderRadius: "5px"
}

const textStyle = {
    fontWeigth: "bold",
    fontSize: "1.5rem"
}

export const EmailTemplate = () => (
    <div className="email__container" style={style}>
      <h1>Thanks for subscribing 💜</h1>
      <img src="https://techcrunch.com/wp-content/uploads/2019/02/rockets-of-awesome.jpg" alt="fashion kids" style={styleImg}/>
      <p style={textStyle}>
        {
            `Don't miss out on this incredible opportunity to shop your 
            favorites at a fraction of the price. Hurry and shop now to 
            take advantage of our 20% off offer before it's gone!`
        }
      </p>
    </div>
);
  