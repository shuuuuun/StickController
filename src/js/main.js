import $ from 'jquery';
import StickController from './StickController';

const stick = new StickController({
  $element: $('.js-stick-toucharea'),
  maxDistance: 50,
});
