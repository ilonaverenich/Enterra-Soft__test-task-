import data from '../data.json';
import React, { useState } from 'react';

function TournamentItem() {
  const [tournamentItems] = useState(data.result);

  return (
    <div>
      {tournamentItems.map(({ 
        key, 
        status, 
        pin, 
        additional, 
        logo, 
        title, 
        'title-color': titleColor, 
        time, 
        counter, 
        price 
      }) => (
        <div className="tournament-item" key={key}>
          <div className={`tournament-item__block-status ${status}`}>
            {status}
          </div>
          <div className="tournament-item__content">
            <div className="tournament-item__wrapper">
              <div>
                <div className="tournament-item__additional-block">
                  {pin && (
                    <img
                      width="16px"
                      height="16px"
                      src="https://i.postimg.cc/hv29467f/tags.png"
                      alt="pin"
                    />
                  )}
                  <div className="tournament-item__additional-title">
                    {additional}
                  </div>
                  {logo && logo.map((link, i) => (
                    <img
                      key={i}
                      width="16px"
                      height="16px"
                      src={link}
                      alt={`logo-${i}`}
                    />
                  ))}
                </div>
                <div className="tournament-item__title">
                  <span style={{ color: titleColor }}>{title}</span>
                </div>
              </div>
              <div>
                <div className={`tournament-item__button ${status === 'Registering' ? '' : 'cancelled'}`}>
                  {status === 'Registering' ? 'Join table' : 'Cancelled'}
                </div>
              </div>
            </div>
            <div className="tournament-item__footer">
              <div className="tournament-item__time-block">
                <img
                  src="https://i.postimg.cc/prY6MG7n/time.png"
                  alt="time icon"
                />
                <p>{time}</p>
              </div>
              <div className="tournament-item__people-box">
                <div className="tournament-item__people-block">
                  <img
                    width="14px"
                    src="https://i.postimg.cc/sXK8pWfB/user.png"
                    alt="people icon"
                  />
                  <p>{counter}</p>
                </div>
                <div className="tournament-item__win">
                  <img
                    width="14px"
                    src="https://i.postimg.cc/02GSZCRH/win-icon.png"
                    alt="win icon"
                  />
                  <p>{price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TournamentItem;
