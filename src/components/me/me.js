import React from 'react';

const Me = () => {
  return (
    <div className="row center margin-top-10">
      <div className="col s12 m2">
        <img alt='profil' className="responsive-img circle margin-top-5" src="https://media.licdn.com/dms/image/C5103AQHoFgwxynXEjw/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=D5zMryFhFKZfb0cz5c4i_Mc58Z3-e5Xh3r1vV-Hx9tU" />
      </div>
      <div className="col s12 m10 margin-top-5">
        <h5 className="left">Massinissa Ait Ali</h5>
        <div className='margin-top-5'>
          <p>
            I am the lucky winner of a green card through the American lottery. I am honored and excited to work in the United States. I love web development, i do front-end in my work and fullstack in personal projects.
          </p>
          <p className='margin-top-2'>
            4 Years Experiences in company / Engineer School
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;