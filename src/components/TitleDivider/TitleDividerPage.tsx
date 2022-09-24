import './TitleDivider.scss';

import React, { ReactElement } from 'react';

export type TTitleDividerProps = {
  title: string;
};

const TitleDivider = (props: TTitleDividerProps): ReactElement => {
  return (
    <section className="title-divider">
      <span>{props.title}</span>
    </section>
  );
};

export default TitleDivider;
