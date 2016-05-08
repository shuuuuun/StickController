import { EventEmitter } from 'events';
import TouchController from './TouchController';

export default class StickController extends EventEmitter {
  constructor(opts = {}) {
    super();
    
    this.$element = opts.$element;
    this.position = { x: 0, y: 0 };
    
    this.setEvent();
  }
  
  setEvent(){
    const touch = new TouchController({
      touchstartElement: this.$element.get(0),
      touchmoveElement: document,
      touchendElement: document,
    });
    
    touch.on('touchmove', (evt) => {
      this.movePosition({ x: -evt.deltaX, y: -evt.deltaY });
    });
    touch.on('touchend', (evt) => {
      this.animatePosition({ x: 0, y: 0 });
    });
  }
  
  movePosition(distance){
    const before = this.position;
    const target = {
      x: (before.x - distance.x),
      y: (before.y - distance.y),
    };
    this.jumpPosition(target);
    this.emit('moved', this.position);
  }
  
  animatePosition(target){
    this.setPosition(target);
    this.$element.animate({
      'top': target.y + 'px',
      'left': target.x + 'px',
    }, () => {
      this.emit('animateend', this.position);
    });
  }
  
  jumpPosition(target){
    this.setPosition(target);
    this.$element.css({
      'top': target.y + 'px',
      'left': target.x + 'px',
    });
    this.emit('jumped', this.position);
  }
  
  setPosition(target){
    this.position = target;
  }
}
