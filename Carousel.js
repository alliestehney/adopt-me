import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // MUST be static; take in a set of PROPS and
  // give back a new set of STATE
  static getDerivedStateFromProps({ media }) {
    console.log("media: ", media);
    let photos = ["http://placecorgi.com/600/600"];

    // ONLY GRAB LARGE PHOTOS
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };

  render() {
    const { active, photos } = this.state;
    console.log(this.state);
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
