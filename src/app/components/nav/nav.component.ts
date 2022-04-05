import { Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ViewComponent } from '../view/view.component';
import { NotificationService } from 'src/app/services/notification.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public  searchContent: string = '';
  temp: Card[];
  navbarDown = false;

  constructor(private notifyService: NotificationService, private searchEx: ViewComponent) {

    this.temp = []
    }


showToasterInvalidSearch(){
      this.notifyService.showError("No flashcards found with that subject", "Error!")
    }

  public performSearch() {



    if (!this.searchContent.trim()) {
      console.log('No search information entered');
      this.showToasterInvalidSearch();
      return;
    }

    console.log(this.searchContent);

    this.searchEx.updateFlashcard(this.searchContent)

  }

  public flipNavBar() {
    let x = document.getElementById('navbarSupportedContent');

    if (x) {
      this.navbarDown = !this.navbarDown;
      if (this.navbarDown) {
        x.style.display = 'flex';
      }
      else {
        x.style.display = 'none';
      }
    }
    else {
    }
  }






















  // (function() {
  //   angular.module('toastBasicDemo', ['ngMaterial'])
  //   .controller('AppCtrl', AppCtrl);

  //   public AppCtrl($mdToast, $log) {
  //     var ctrl = this;
  //     var last = {
  //       bottom: false,
  //       top: true,
  //       left: false,
  //       right: true
  //     };

  //     ctrl.toastPosition = last;

  //     ctrl.getToastPosition = function() {
  //       sanitizePosition();

  //       return Object.keys(ctrl.toastPosition)
  //       .filter(function(pos) {
  //         return ctrl.toastPosition[pos];
  //       }).join(' ');
  //     };

  //     function sanitizePosition() {
  //       var current = ctrl.toastPosition;

  //      current.bottom = false;

  //      current.left = false;

  //       last = current;
  //     }

  //     ctrl.showSimpleToast = function() {
  //       var pinTo = ctrl.getToastPosition();

  //       $mdToast.show(
  //         $mdToast.simple()
  //         .textContent('Simple Toast!')
  //         .position(pinTo)
  //         .hideDelay(3000))
  //       .then(function() {
  //         $log.log('Toast dismissed.');
  //       }).catch(function() {
  //         $log.log('Toast failed or was forced to close early by another toast.');
  //       });
  //     };

  //     ctrl.showActionToast = function() {
  //       var pinTo = ctrl.getToastPosition();
  //       var toast = $mdToast.simple()
  //         .textContent('Marked as read')
  //         .actionKey('z')
  //         .actionHint('Press the Control-"z" key combination to ')
  //         .action('UNDO')
  //         .dismissHint('Activate the Escape key to dismiss this toast.')
  //         .highlightAction(true)
  //         // Accent is used by default, this just demonstrates the usage.
  //         .highlightClass('md-accent')
  //         .position(pinTo)
  //         .hideDelay(0);

  //       $mdToast.show(toast)
  //       .then(function(response) {
  //         if (response === 'ok') {
  //           alert('You selected the \'UNDO\' action.');
  //         } else {
  //           $log.log('Toast dismissed.');
  //         }
  //       }).catch(function() {
  //         $log.log('Toast failed or was forced to close early by another toast.');
  //       });
  //     };
  //   }
  // }//)();

}
