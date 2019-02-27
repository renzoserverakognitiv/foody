import React, { Component } from 'react';
import {fontSizeHero} from '../theme/themeConsts';
import Avatar from '../components/Avatar';

class UserProfileTrigger extends Component {
  render() {
    return (
        <span>
            <Avatar size={fontSizeHero} />
        </span>
    );
  }
}

export default UserProfileTrigger;