import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {/*otherSectionProps to jest to samo jakbyś zapisał {id, title, imageUrl, size, linkUrl}*/}
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
