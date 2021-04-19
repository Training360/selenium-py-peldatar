function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

angular
.module('kanban', ['ui.router', 'dndLists'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/lists");
  $stateProvider
    .state('lists', {
      resolve: {
        lists: ['ListsService', function(lists) {
          return lists.all();
        }]
      },
      url: "/lists",
      templateUrl: "/templates/lists.html",
      controller: ['lists', function(lists) {
        this.lists = lists;
      }],
      controllerAs: 'vm'
    })
    .state('lists.items-form', {
      resolve: {
        list: ['ListsService', '$stateParams', function(lists, params) {
          return lists.findList(params.listId);
        }],
        item: ['ListsService', '$stateParams', function(lists, params) {
          var listId = params.listId,
              itemId = params.itemId,
              list = lists.findList(listId);
          if(typeof params.itemId === 'undefined') return false;
          return lists.findItem(list, itemId);
        }]
      },
      url: '/:listId/items/new',
      templateUrl: '/templates/items-form.html',
      controller: ['list', 'item', '$state', function(list, item, $state) {
        this.card = _setupCard(list, item);
        
        this.saveCard = function() {
          if(typeof this.card.title === 'undefined' || this.card.title.length < 3) {
            this.card.errors.push("Card titles must be at least 3 characters long.");
            return false;
          }
          delete this.card.errors;
          list.items.push(this.card);
          $state.go('lists');
        };
        
        function _setupCard(list, item) {
          var card;
          
          if(item) {
            list.items.splice(indexOf(item), 1);
            card = item;
            card.errors = [];
          } else {
            card = { id: guid(), errors: [] };
          }
          
          return card;
        }
      }],
      controllerAs: 'vm'
    })
    .state('lists.items-show', {
      resolve: {
        item: ['ListsService', '$stateParams', function(lists, params) {
          var listId = params.listId,
              itemId = params.itemId,
              list = lists.findList(listId);
          return lists.findItem(list, itemId);
        }]
      },
      url: '/:listId/items/:itemId',
      templateUrl: '/templates/items-show.html',
      controller: ['item', function(item) {
        this.item = item;
      }],
      controllerAs: 'vm'
    });
})
.service('ListsService', function() {
  var service = {},
      lists = [
      {
        id: guid(),
        title: 'Todo',
        items: [
          {
            id: guid(),
            title: 'Pizza',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lacus malesuada, convallis magna sed, fringilla justo. Maecenas tempus, ex tempus bibendum venenatis, tortor nulla rhoncus orci, ac tempor arcu odio volutpat ante.'
          },
          {
            id: guid(),
            title: 'Tacos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lacus malesuada, convallis magna sed, fringilla justo. Maecenas tempus, ex tempus bibendum venenatis, tortor nulla rhoncus orci, ac tempor arcu odio volutpat ante.'
          },
          {
            id: guid(),
            title: 'BBQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lacus malesuada, convallis magna sed, fringilla justo. Maecenas tempus, ex tempus bibendum venenatis, tortor nulla rhoncus orci, ac tempor arcu odio volutpat ante.'
          },
          {
            id: guid(),
            title: 'Burgers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lacus malesuada, convallis magna sed, fringilla justo. Maecenas tempus, ex tempus bibendum venenatis, tortor nulla rhoncus orci, ac tempor arcu odio volutpat ante.'
          }
        ]
      },
      {
        id: guid(),
        title: 'Doing',
        items: [
          {
            id: guid(),
            title: 'Macaroni',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lacus malesuada, convallis magna sed, fringilla justo.'
          }
        ]
      },
      {
        id: guid(),
        title: 'Done',
        items: []
      }
    ];

  service.all = function() {
    return lists;
  };

  service.findList = function(id) {
    return lists.filter(function(list) {
      return list.id === id;
    })[0];
  };

  service.findItem = function(list, id) {
    return list.items.filter(function(item) {
      return item.id === id;
    })[0];
  };

  return service;
});