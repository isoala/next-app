import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-info">
          {/* Replace the title paragraph with your image */}
          <Image
            src="/profile1.JPG"
            alt="Profile"
            className="profile-image"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '.7rem' }}
          />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   --background: linear-gradient(to left, #C5C1CC 0%, #979AAA 100%);
   width: 320px;
   height: 220px;
   padding: 3px;
   border-radius: 1rem;
   overflow: invisible;
   background: #101828;
   background: #101828;
;
   position: relative;
   z-index: 0;
  }

  .card::after {
   position: absolute;
   content: "";
   top: 30px;
   left: 0;
   right: 0;
   z-index: -1;
   height: 100%;
   width: 100%;
   transform: scale(0.75);
   filter: blur(25px);
   /*background: #f7ba2b;*/
   background: #101828;
   background: var(--background);
   transition: opacity .5s;
  }

  .card-info {
   --color: #181818; /* This variable isn't directly used for the image, but kept for consistency */
   background: var(--color); /* This will be the background behind your image if it's not fully opaque */
   color: var(--color); /* This color primarily affects text if you had any */
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   overflow: hidden; /* Crucial: Hides any part of the image that extends beyond the rounded corners */
   border-radius: .7rem;
  }
  .profile-image {
    /* The Next.js Image component will handle sizing and object-fit via props/styles */
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: .7rem !important;
  }

  .profile-image {
    width: 100%; /* Make the image fill the width of its container (.card-info) */
    height: 100%; /* Make the image fill the height of its container */
    object-fit: cover; /* This is key! It crops the image to fit the container without distortion */
    border-radius: .7rem; /* Apply the same border-radius as .card-info for matching rounded corners */
  }

  /*Hover*/
  .card:hover::after {
   opacity: 0;
  }

  .card:hover .card-info {
   /* The 'color' property won't affect the image directly. */
   /* If you want a hover effect on the image itself, you could add a filter or transform here. */
   /* Example: filter: brightness(1.2); */
      transform: scale(1.07);
    transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }
`;

export default Card;