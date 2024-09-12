const stars = Array(5).fill("https://i.postimg.cc/524Nq2HV/star.png");
const logoUrl = "https://i.postimg.cc/jCVnS0vj/logo.png";
const visibilityUrl = "https://i.postimg.cc/5yJjXsmM/visibly.png";

const Star = ({ src, alt }) => <img src={src} width='8px' alt={alt} />;
const Logo = ({ src, alt }) => <img src={src} width='34px' height='34px' alt={alt} />;
const VisibilityIcon = ({ src, alt }) => <img src={src} width='14px' height='12px' alt={alt} />;

function PlayerInfo() {
  return (
    <div className='block-player'>
      <div className='block-player__box'>
        <div className='block-player__name'>LongUserName</div>
        <div className='block-player__star'>
          {stars.map((star, index) => <Star key={index} src={star} alt={`star-${index}`} />)}
        </div>
      </div>
      <div className='block-player__logo'>
        <Logo src={logoUrl} alt="logo" />
      </div>
      <div className='block-player__block'>
        <div className='block-player__visibility'>
          <VisibilityIcon src={visibilityUrl} alt="visibility" />
        </div>
        <div className='block-player__price'>$100,500.00</div>
      </div>
    </div>
  );
}

export default PlayerInfo;