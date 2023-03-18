import User from "./User";

const Card = ({ StudentName, image, testimonialHeading, testimonial, firstName }) => {

  return (
    // classname = card--firstname
    <div
      className={
        "card card--" + firstName(StudentName)
      }>
      <User src={image} StudentName={StudentName} firstName={firstName} />
      <p className={"card__testimonial-heading card__testimonial-heading--" + firstName(StudentName) }>{testimonialHeading}</p>
      <p className={"card__testimonial-paragraph card__testimonial-paragraph--" + firstName(StudentName)  }>{'"' + testimonial + '"'}</p>
    </div>
  );
};

export default Card;


