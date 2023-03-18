const user = ({ StudentName, src, firstName }) => {
  return (
    <div className='user'>
      <img className={"img--user img--user--" + firstName(StudentName)} src={src} alt='' />
      <div className='user__title'>
        <h1 className={"user__name user__name--" + firstName(StudentName)}>{StudentName}</h1>
        <h2 className={"user__tag user__tag--" + firstName(StudentName)}>Verified Graduate</h2>
      </div>
    </div>
  );
};

export default user;
