import React from 'react';
import {Link} from "react-router-dom";
import {Content, Wrapper} from "./BreadCrumbStyle";
import PropTypes from "prop-types";

const BreadCrumb = ({movieTitle}) => {
    return (
        <div>
            <Wrapper>
                <Content>
                    <Link to={'/'}>
                        <span>
                            Home
                        </span>
                    </Link>
                    <span>|</span>
                    <span>{movieTitle}</span>
                </Content>
            </Wrapper>
        </div>
    );
};
BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
}
export default BreadCrumb;
