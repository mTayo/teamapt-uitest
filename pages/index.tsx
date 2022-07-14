import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
      <>
        <header>
            <nav className='d-flex'>
              <div className='logo-container'>
                  <img src='/icons/logo.svg' alt="App Logo" />
              </div>
              <div className='calendar d-flex'>
                  <div className='calendar-img-container'>
                    <img src='/icons/calendar.svg' alt="App Calendar" />
                  </div>
                  <div className='calendar-text'>
                    <div className='bold-text'>
                      Day 1
                    </div>
                    <div className='light-text'>
                      of 5
                    </div>

                  </div>
              </div>
            </nav>
        </header>
        <main>
          <div className='hero-section '>
            <div className='green_star position-absolute mobile-hidden'/>
            <div className='white_star_1 position-absolute mobile-hidden'/>
            <div className='white_star position-absolute mobile-display'/>
            <div className='hero-header slide-up'>
              <span className='unlock text-block'>Unlock to </span>
              Power your dreams!
              <div className='orange_star_1 position-absolute mobile-hidden'/>
            </div>
            <div className='hero-secondary-text slide-up'>
            <span className='text-block'>Stand a chance to win </span>
            <span className='bold'> N3,000,000</span> everyday for the next 5 days
            </div>
            
          </div>
          <div className='how-it-works-section slide-up mobile-margin'>
          <div className='blue_star position-absolute mobile-display'/>
          <div className='orange_star position-absolute mobile-display'/>
            <div className='header'>
              🚀 How To Play
            </div>
            <ul>
              <li>1. Guess the right combination of numbers</li>
              <li>2. Win <span className='win-bold'>N3,000,000</span> instantly</li>
            </ul>
            <div>Sounds unbelievable? Well, guess right & see for yourself!</div>
            <div className='note'>
              <div className='text-bulb-container'>
                <img src='/icons/bulb.svg' alt="Bulb" />
              </div>
              Think well before you guess. You have only 2 attempts per day and even after you win, you can come back the next day to try for another jackpot!
            </div>
          </div>
          <div className='play-coin-container'>
            <div className='white_star_2 position-absolute mobile-hidden'/>
            <div className='bottom_orange_star position-absolute mobile-hidden'/>
            <div className='play-btn slide-up'>
              <button className='d-flex'>
                <div>Play The Game</div>
                <img src='/icons/arrow_left.svg' alt="Arrow Left" />
              </button>
            </div>
              <div className='footer slide-up'>
                
                <div className='coin-pile '>
                  <img src='/images/coin_pot.png' alt="Coin pot" />
                </div>
                <div className='floating-coin-left position-absolute' />
                <div className='floating-coin-right position-absolute' />
                
                <div className='flying-star star-1'/>
                <div className='flying-star star-2'/>
                <div className='flying-star star-3'/>
                <div className='flying-star star-4'/>
                <div className='flying-star star-5'/>
                <div className='flying-star star-6'/>
              </div>
              <div className='light-ray'>
                  <img src='/icons/light_ray.svg' alt="Light ray" />
                </div>
            </div>
        </main>
      </>
  )
}

export default Home
