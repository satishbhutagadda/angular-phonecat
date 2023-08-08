'use strict';
class PhoneDetailController {
    static { this.$inject = ['$routeParams', 'Phone']; }
    constructor($routeParams, Phone) {
        const phoneId = $routeParams['phoneId'];
        this.phone = Phone.get({ phoneId }, (phone) => {
            this.setImage(phone.images[0]);
        });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map