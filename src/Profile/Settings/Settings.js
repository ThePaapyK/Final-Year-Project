import React, { useEffect, useState } from "react";
import './Settings.css';
import GeneralSettings from './GeneralSettings';
import AccountSettings from './AccountSettings';
import PreferencesSettings from './PreferencesSettings';

export default function Settings() {
  useEffect(() => {
    document.title = "Settings";
  }, []);

  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'account':
        return <AccountSettings />;
      case 'preferences':
        return <PreferencesSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <>
      <div className="App-settings">
        <div className="settings-header">
	   <p>Settings</p>
	</div>
	<hr />
	<div className="settings-body">
	  <div className="set-sidebar">
	    <ul>
	      <li><button className={activeTab === 'general' ? 'active' : ''}
	        onClick={() => setActiveTab('general')}>
	        General</button>
	      </li>
              <li><button className={activeTab === 'account' ? 'active' : ''}
	        onClick={() => setActiveTab('account')}>
	        Account</button>
	      </li>
              <li><button className={activeTab === 'preferences' ? 'active' : ''}
	        onClick={() => setActiveTab('preferences')}>
	        Preferences</button>
	      </li>
	    </ul>
	  </div>
	  <div className="set-content">
	    {renderContent()}
	  </div>
	</div>
      </div>
   </>
  );
};
