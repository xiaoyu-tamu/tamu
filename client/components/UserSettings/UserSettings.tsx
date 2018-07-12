import React from 'react';
import { ListItemIcon, ListItemText, Divider, MenuList, MenuItem } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsIcon from '@material-ui/icons/Settings';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { Link } from 'components/Link';
import { StandardProps } from 'types';

export interface UserMenuListProps extends StandardProps {}

type Props = UserMenuListProps;

const UserSettings: React.SFC<Props> = () => (
  <div>
    <MenuList component="nav" dense>
      <Link variant="button" href="/bookmarks">
        <MenuItem>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="My Bookmarks" />
        </MenuItem>
      </Link>
      <Link variant="button" href="/account/signout">
        <MenuItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </MenuItem>
      </Link>
    </MenuList>
    <Divider />
    <MenuList component="nav" dense>
      <MenuItem disabled>
        <ListItemIcon>
          <BrightnessIcon />
        </ListItemIcon>
        <ListItemText primary="Dark Theme: Off" />
      </MenuItem>
      <MenuItem disabled>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText primary="Language: English" />
      </MenuItem>
      <MenuItem disabled>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </MenuItem>
      <MenuItem disabled>
        <ListItemIcon>
          <FeedbackIcon />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
      </MenuItem>
      <Link variant="button" href="/account">
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
      </Link>
    </MenuList>
  </div>
);

export default UserSettings;
