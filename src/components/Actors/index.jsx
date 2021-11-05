import React from 'react';
import {Image, Wrapper} from "./ActorStyle";
import PropTypes from 'prop-types';

const Actors = ({name, character, imageUrl}) => (

    <Wrapper>
        <Image src={imageUrl} alt='áctor-thumb'/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);
Actors.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}
export default Actors;
