import s from './bgForOutlet.module.css';

const BGForOutlet = ({ bottom = true }) => {
  return (
    <div className={s.gridContainer}>
      <div className={s.plane}>
        <div className={s.grid}></div>
        <div className={s.glow}></div>
      </div>
      {bottom && (
        <div className={s.plane}>
          <div className={s.grid}></div>
          <div className={s.glow}></div>
        </div>
      )}
    </div>
  );
};

export default BGForOutlet;
