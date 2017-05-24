import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Comments from './';
import './style.sass';

storiesOf('Comments', module).add('minimal', () => <Comments />);
